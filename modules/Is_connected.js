const prompt = require('./Prompt');
const dr = require('./Get_actual_file');
const Api = require('./Blih_Api_Connexion');
const chalk  = require('chalk');

module.exports = {
  ask_Connect : async () => {
    console.log(chalk.yellow("Connecter Vous !"));
    const blih_credentials = await prompt.askBlihCredentials();
    dr.Save_actual_user(blih_credentials.email , blih_credentials.password)
    return Api.Api_connexion({"email" : blih_credentials.email ,"password" : blih_credentials.password});
  }
}
