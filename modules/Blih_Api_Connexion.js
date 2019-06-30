const Blih = require('blih');
const prompt = require('./Prompt');
const Git = require('./Git');
const fs = require('fs');
const dr = require('./Get_actual_file');
var sleep = require('sleep');
const logo = require('./Print_logo');

module.exports = {
  Api_connexion : (data) => {
    return new Blih(data);
  },
  create_repository_blih : async (User) => {
    const info_file = await prompt.Create_Blih_Project();
    const result = await User.createRepository(info_file.Project_name)
    .then()
    .catch((result) => {
      console.log(result);
      if(result == "Repository " + info_file.Project_name + " already exists"){
        return false;
      }else{
        console.log(result);
        return true;
      }
    });
  if(result){
    await User.setACL(info_file.Project_name, "ramassage-tek", 'r')
    .then(result)
    .catch(result);
}
    const create_it = await prompt.Create_the_dir();
    if(create_it.result == 'Oui'){
      if (fs.existsSync(info_file.Project_name)) {
        const suppr = await prompt.Suppress();
        if(suppr.result == 'Non'){
          return;
        }else{
          dr.delete(info_file.Project_name);
        }
      }
    }else{
    return;
    }
    Git.git_clone(info_file.Project_name, User.email);
    console.log('Votre dossier a bien été créer !!')
    sleep.sleep(3);
    return;
  },
  set_acl : async (User) => {
    const tab = await get_all_files(User);
    const files = await prompt.Show_all(tab);
    if(files.result == 'Retour en arrière !'){
      return;
    }
    const acls = await get_acls(User , files.result);
  },
  delete_repo : async (User) => {
    const tab = await get_all_files(User);
    const files = await prompt.Show_all(tab);
    if(files.result == 'Retour en arrière !'){
      return;
    }
    await User.deleteRepository(files.result)
    .then(console.log)
    .catch(console.log);
    sleep.sleep(3);
    return;
  },
}

const get_all_files = async (User) => {
  return await User.listRepositories()
  .then((result) => {
    let tab = ['Retour en arrière !']
    for(x = 0; x < result.length; x++ ){
      tab.push(result[x].name);
    }
    return tab;
  })
  .catch(console.log);
}

const get_acls = async (User , file) => {
  logo.logo("Acls");
  console.log("Acl du repository " + file + " ! ");
  await User.getACL(file)
  .then((result) => {
    for(x = 0; x < result.length; x++ ){
      console.log(result[x].name + ' : ' + result[x].rights);
    }
  }).catch(console.log);
  const reponses = await prompt.set_get();
  if(reponses.result == 'Retour en arrière'){
    return;
  }else if(reponses.result == 'Ajouter des acls'){
    const acl_credential = await prompt.add_acl();
    await User.setACL(file, acl_credential.user, acl_credential.acls)
    .then(console.log)
    .catch((result) => {
      console.log(result + ' vous allez être redirigé !');
    });
    sleep.sleep(2);
    await get_acls( User , file);
  }else{
    const actual_acl = await get_acl(User, file);
    const suppr_acl = await prompt.Show_all(actual_acl);
    await User.setACL(file, suppr_acl.result, '')
    .then(console.log)
    .catch((result) => {
      console.log(result + ' vous allez être redirigé !');
    });
    sleep.sleep(2);
    await get_acls( User , file);
  }
}

const get_acl = async (User,file) => {
  return await User.getACL(file)
  .then((result) => {
    let tab = [];
    for(x = 0; x < result.length; x++ ){
      tab.push(result[x].name);
    }
    return tab;
  }).catch(console.log);
}
