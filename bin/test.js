const assert = require('assert');
const pkg = require('../package.json');

const peerDependencies = Object.keys(pkg.peerDependencies)
  .sort()
  .map(k => `${k}@${pkg.peerDependencies[k]}`)
  .join(', ');

const devDependencies = Object.keys(pkg.devDependencies)
  .sort()
  .map(k => `${k}@${pkg.devDependencies[k]}`)
  .join(', ');

assert(
  peerDependencies === devDependencies,
  `devDependencies and peerDependencies don't match. \nPeer dependencies: ${peerDependencies}. \nDev dependencies: ${devDependencies}.`,
);
