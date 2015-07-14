var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;

var ROOT_DIR = path.resolve(__dirname, '..');
var WEBMAKER_CORE_DIR = fs.realpathSync(path.resolve(
  ROOT_DIR, 'node_modules', 'webmaker-core'
));

function main() {
  execSync('npm install', { cwd: WEBMAKER_CORE_DIR, stdio: 'inherit' });
  execSync('node npm_tasks/copy-env.js',
           { cwd: ROOT_DIR, stdio: 'inherit' });
  execSync('npm run build', { cwd: WEBMAKER_CORE_DIR, stdio: 'inherit' });
}

exports.WEBMAKER_CORE_DIR = WEBMAKER_CORE_DIR;

if (!module.parent) {
  main();
}
