import Realm from 'realm';

export const NOTEPANE_SCHEMA = 'NotePane'; //schema name
export const NOTE_SCHEMA = 'Note'; //schema name

//Define models and their properties
export const NoteSchema = {
  name: NOTE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int', // primaryKey
    note: { type: 'string', indexed: true },
    creationDate: 'date',
    modifiedDate: 'date',
    dueDate: { type: 'date', default: null },
    finished: { type: 'bool', default: false },
    title: 'string',
  }
};

export const NotePaneSchema = {
  name: NOTEPANE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int', // primaryKey
    paneName: 'string',
    notes: { type: 'list', objectType: NOTE_SCHEMA },
  }
};
export const databaseOptions = {
  path: 'Capture.realm',
  schema: [NoteSchema, NotePaneSchema],
  schemaVersion: 0,
};

//functions for NotePane
export const insertNewNotePane = async newNotePane => {
  try {
    const realm = await Realm.open(databaseOptions);
    realm.write(async () => await realm.create(NOTEPANE_SCHEMA, newNotePane));
  } catch (err) {
    console.log('insertNewNotePane', err);
    }
  };

export const getNotePanes = async () => {
  try {
    const realm = await Realm.open(databaseOptions);
    const Panes = realm.objects(NOTEPANE_SCHEMA);
    return Array.from(Panes);
    } catch (err) {
        console.log('getNotePanes', err);
    }
};

export const insertNewNote = async (newNote, paneID) => {
  try {
    const realm = await Realm.open(databaseOptions);
    //realm.write(async () => await realm.create(NOTE_SCHEMA, newNote));
    //const PaneToWriteTo = await realm.objects(NOTEPANE_SCHEMA).filtered('id == $0', paneID);
    const PaneToWriteTo = await realm.objectForPrimaryKey(NOTEPANE_SCHEMA, paneID);
    console.log('THE TRUE PANE WE ARE ADDING TO============', PaneToWriteTo.paneName);
    realm.write(async () => await PaneToWriteTo.notes.push(newNote));
  } catch (err) {
    console.log('insertNewNote', err);
  }
};

export const deleteNotePane = async (paneID) => {
  try {
    const realm = await Realm.open(databaseOptions);
    const PaneToDelete = await realm.objectForPrimaryKey(NOTEPANE_SCHEMA, paneID);
    realm.write(async () => await realm.delete(PaneToDelete));
  } catch (err) {
    console.log('deleteNotePane Error', err);
  }
};

//Edit a NotePane
export const editNotePane = async (newName, paneID) => {
  try {
    const realm = await Realm.open(databaseOptions);
    const PaneToUpdate = await realm.objectForPrimaryKey(NOTEPANE_SCHEMA, paneID);
    realm.write(async () => { PaneToUpdate.paneName = newName; });
  } catch (err) {
    console.log('editNotePane Error', err);
  }
};

//Edit a Note
export const editNote = async (newNote, noteID) => {
  try {
    const realm = await Realm.open(databaseOptions);
    const NoteToUpdate = await realm.objectForPrimaryKey(NOTE_SCHEMA, noteID);
    realm.write(async () => {
      NoteToUpdate.note = newNote;
      NoteToUpdate.modifiedDate = Date();
    });
  } catch (err) {
    console.log('editNote error', err);
  }
};

//Delete a Note
export const deleteNote = async (noteID) => {
  try {
    const realm = await Realm.open(databaseOptions);
    const NoteToDelete = await realm.objectForPrimaryKey(NOTE_SCHEMA, noteID);
    realm.write(async () => {
      await realm.delete(NoteToDelete);
    });
  } catch (err) {
    console.log('deleteNote', err);
  }
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default new Realm(databaseOptions);
