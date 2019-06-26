const fs = require('fs');
const path = require('path');
let jsonData = require('./Connexion_log.json');
var shell = require('shelljs');


module.exports = {
  Get_actual_directory : () => {
    return path.basename(process.cwd());
  },
  Save_actual_user : (email , password) => {
    jsonData.blih.email = email;
    jsonData.blih.password = password;
    fs.writeFile('./modules/Connexion_log.json', JSON.stringify(jsonData), (err) => {
      if (err) throw err;
    });
  },
  delete : (file) => {
    shell.exec('rm -rf ' + file).code;
  }
}
