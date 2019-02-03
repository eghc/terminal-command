const terminalCommands = require('./terminal-commands');

terminalCommands.ls();
terminalCommands.mkdir('test');
terminalCommands.touch('test.txt', "hello world!");
