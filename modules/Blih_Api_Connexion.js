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
    console.log(result);
    return true;
}
});
    const create_it = await prompt.Create_the_dir('Voulez vous créer le fichier ? :');
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
