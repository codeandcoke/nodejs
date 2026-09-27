import yaml from 'js-yaml';
import fs from 'fs';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

// Lee el fichero de configuración
let configFile = 'config.prod.yaml';
const argv = yargs(hideBin(process.argv)).argv;
if (argv.config != undefined) {
    configFile = argv.config;
}
const config = yaml.load(fs.readFileSync(configFile, 'utf-8'));

module.exports = {
    config
};