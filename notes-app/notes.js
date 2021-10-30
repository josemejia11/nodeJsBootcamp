const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');


const addNote = ( title, body ) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(( note ) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if ( !duplicateNote ) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.inverse.red('Note title already exists'));
    }
}

const saveNotes = ( notes ) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

const listNotes = () => {
    console.log(chalk.blue.inverse('Your notes'));
    const notes = loadNotes();
    notes.forEach((note) => console.log(note.title));
}

const readNote = ( title ) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if ( noteToRead ) {
        console.log(chalk.blue.inverse('Your note:'));
        console.log(chalk.green.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}

const removeNote = ( title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);
    if ( notes.length === newNotes.length) {
        console.log(chalk.inverse.red('No note found!'));
    } else {
        saveNotes(newNotes);
        console.log(chalk.inverse.green('Note Removed!'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}