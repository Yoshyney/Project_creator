#!/usr/bin/env node
const dr = require('./modules/Get_actual_file');
const prompt = require('./modules/Prompt');
const co = require('./modules/Is_connected');
const logo = require('./modules/Print_logo');
let jsonData = require('./modules/Connexion_log.json');
const Api = require('./modules/Blih_Api_Connexion');



const run = async () => {
  logo.logo("Make My Project");
  const directory = await prompt.Choose_dir_to_create();
  if(directory.dir == 'Blih'){
    return  blih_();
  }else if(directory.dir == 'Github'){
    return  github_();
  }
}

const blih_ =  async () => {
  logo.logo('Your Blih :)');
  if(jsonData.blih.email == ''){
    const User = await co.ask_Connect();
    return blih_();
  }else{
    const User = Api.Api_connexion(jsonData.blih);
    const settings = await prompt.blih_settings();
    if(settings.blih_settings == "Créer ou cloner un projet"){
      await Api.create_repository_blih(User);
    }else if(settings.blih_settings == "Ajouter des droits"){
      await Api.set_acl(User);
    }else if(settings.blih_settings == "Supprimer un projet"){
      await Api.delete_repo(User);
    }else if(settings.blih_settings == "Se connecter"){
      await co.ask_Connect();
    }else if(settings.blih_settings == "Retour"){
      return run();
    }
    return blih_();
  }
}




const github_ =  async () => {
  logo.logo('Your Github :)');
  const settings = await prompt.blih_settings();
}

run();
