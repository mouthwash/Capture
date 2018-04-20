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
    finished: { type: 'bool', default: false },
  }
};

export const NotePaneSchema = {
  name: NOTEPANE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int', // primaryKeney
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
    console.log('!!!!!!!!!!!!!!!!!!', err);
    }
  };

export const getNotePanes = async () => {
  try {
    const realm = await Realm.open(databaseOptions);
    const Panes = realm.objects(NOTEPANE_SCHEMA);
    return Array.from(Panes);
    } catch (err) {
        console.log('GET ERROR');
    }
};

export const insertNewNote = async newNote => {
  try {
    const realm = await Realm.open(databaseOptions);
    realm.write(async () => await realm.create(NOTE_SCHEMA, newNote));
  } catch (err) {
    console.log('############', err);
  }
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default new Realm(databaseOptions);
