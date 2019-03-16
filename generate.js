#!/usr/bin/env node

const cp = require('child_process');
const fs = require('fs');
const path = require('path');

if (process.argv[1] === __filename) {
  generate();
}

async function generate() {

  try {
    fs.mkdirSync('./renders');
  } catch(e) {
  }

  for (const entry of fs.readdirSync('./icons')) {
    const base = path.basename(entry, '.svg');
    const cmd = `inkscape -z -e ./renders/${base}.png -w 96 -h 96 ./icons/${entry}`;
    cp.exec(cmd);
  }
}

