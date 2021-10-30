const notes = require('./notes.js');
// var validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');

// const msg = getNotes();
// console.log(msg);

// console.log(chalk.blue.bold.inverse('Success!'));

// console.log(process.argv[2]);

// console.log(validator.isEmail('jose@test.com'));
// console.log(validator.isURL('https://mead.io'));


// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

// Create a read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ( argv ) => {
        notes.readNote(argv.title);
    }
});

// Create a list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () => {
        notes.listNotes();
    }
});
yargs.parse();
// console.log(yargs.argv);