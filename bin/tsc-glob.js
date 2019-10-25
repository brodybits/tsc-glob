#! /usr/bin/env node

var spawn = require('child_process').spawn,
    execa = require('execa'),
    helper = require('./command-helper'),
    options = helper.getOptions(),
    commandArgs = options.unknown.concat(helper.resolveTSFiles());

try {
    proc = execa.sync(helper.findTSCExecutable(), commandArgs, { stdio: 'inherit' });
} catch(e) {
    console.error('tsc failre');
    throw(e);
}

// terminate children.
process.on('SIGINT', function () {
    proc.kill('SIGINT'); // calls runner.abort()
    proc.kill('SIGTERM'); // if that didn't work, we're probably in an infinite loop, so make it die.
});

module.exports = process;
