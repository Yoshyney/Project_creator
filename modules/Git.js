var shell = require('shelljs');
const dr = require('./Get_actual_file');

module.exports = {
  git_clone :  (file, email) => {
    shell.exec("git clone git@git.epitech.eu:/" + email + "/" + file).code;
  }
}
