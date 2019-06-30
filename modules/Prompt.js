const inquirer   = require('inquirer');
const dr = require('./Get_actual_file');

module.exports = {
  Choose_dir_to_create : () => {
    const questions = [
      {
        name: 'dir',
        type: 'list',
        message: 'Quel genre de dossier voulez vous créer ?',
        choices: [ "Github", "Blih", "Classique" ]
      }];
      return inquirer.prompt(questions);
    },

    blih_settings : () => {
      const settings = [
        {
          name: 'blih_settings',
          type: 'list',
          message: 'Quel action souhaiter vous realiser avec Blih ?',
          choices: [ "Créer ou cloner un projet", "Ajouter des droits" , "Supprimer un projet", "Se connecter", "Retour" ]
        }];
        return inquirer.prompt(settings);
      },
      askBlihCredentials: () => {
        const id = [
          {
            name: 'email',
            type: 'input',
            message: 'Rentrez votre adresse e-mail Epitech ! :',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Entrer un e-mail epitech valide ! ';
              }
            }
          },
          {
            name: 'password',
            type: 'password',
            message: 'Rentrez votre adresse mot de passe ! :',
            validate: function(value) {
              if (value.length) {
                return true;
              } else {
                return 'Entrer un mot de passe ';
              }
            }
          }
        ];
        return inquirer.prompt(id);
      },
      Create_Blih_Project: () => {
        const create = [
          {
            name: 'Project_name',
            type: 'input',
            message: 'Nom du projet que vous voulez créer ou git clone si déjà créer ! :',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Entrer un nom valide ! ';
              }
            }
          }
        ];
        return inquirer.prompt(create);
      },
      Create_the_dir: () => {
        const create = [
          {
            name: 'result',
            type: 'list',
            message: 'Voulez vous créer le fichier ? :',
            choices: [ "Oui", 'Non' ]
          }
        ];
        return inquirer.prompt(create);
      },
      Suppress: () => {
        const create = [
          {
            name: 'result',
            type: 'list',
            message: 'Voulez vous supprimer le dossier existant ? :',
            choices: [ "Oui", 'Non' ]
          }
        ];
        return inquirer.prompt(create);
      },
      Show_all: (files) => {
        const create = [
          {
            name: 'result',
            type: 'list',
            message: 'Cliquez sur un fichier pour modifier ou bien voir les acls :',
            choices: files
          }
        ];
        return inquirer.prompt(create);
      },
      set_get: (files) => {
        const create = [
          {
            name: 'result',
            type: 'list',
            message: 'Cliquez sur un fichier pour modifier ou bien voir les acls :',
            choices: ['Ajouter des acls', 'Supprimer des acls', 'Retour en arrière']
          }
        ];
        return inquirer.prompt(create);
      },
    add_acl : () => {
        const id = [
          {
            name: 'user',
            type: 'input',
            message: "Rentrez le nom d'un utilisateur ! : " ,
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return "Entrer le nom d'un utilisateur  valide ! ";
              }
            }
          },
          {
            name: 'acls',
            type: 'input',
            message: "Rentrez un droit d'utilisateur ! : ",
            validate: function(value) {
              if (value == "w" || value == "r" || value == "x" ||value == "rx" || value == "rw" || value == "xw" || value == "rxw") {
                return true;
              } else {
                return "Entrer des droits d'utilisateur valide !  ";
              }
            }
          }
        ];
        return inquirer.prompt(id);
      }
    }
