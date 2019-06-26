const Blih = require('blih');
const prompt = require('./Prompt');
const Git = require('./Git');
const fs = require('fs');
const dr = require('./Get_actual_file');
var sleep = require('sleep');

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
    return true;
}
});
    if(!result){
      console.log('Votre Dossier est déjà présent vous allez être rediriger !!')
      sleep.sleep(3);
      return;
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
      }
      Git.git_clone(info_file.Project_name, User.email);
      console.log('Votre dossier a bien été créer !!')
       sleep.sleep(3);
      return;
    }
  }
