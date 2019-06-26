const chalk  = require('chalk');
const clear  = require('clear');
const figlet  = require('figlet');


module.exports = {
   logo : (name) => {
    clear();
    console.log(
      chalk.yellow(
        figlet.textSync(name, { horizontalLayout: 'full' })
      )
    );
  }
}
