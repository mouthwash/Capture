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
    id: 'int', // primaryKey
    paneName: 'string',
    notes: { type: 'list', objectType: NOTE_SCHEMA },
  }
};
const databaseOptions = {
  path: 'Capture.realm',
  schema: [NoteSchema, NotePaneSchema],
  schemaVersion: 0,
};

//functions for NotePane
export const insertNewNotePane = newNotePane => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      realm.create(NOTEPANE_SCHEMA, newNotePane);
      resolve(newNotePane); //if successful resolve called
    });
  }).catch((error) => reject(error)); // if not successful reject called
});

export const updateNotePane = notePane => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      const updatingNotePane = realm.objectForPrimaryKey(NOTEPANE_SCHEMA, notePane.id);
      updatingNotePane.paneName = notePane.paneName;
      resolve();
    });
  }).catch((error) => reject(error));
});

export const deleteNotePane = notePaneId => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      const deletingNotePane = realm.objectForPrimaryKey(NOTEPANE_SCHEMA, notePaneId);
      realm.delete(deletingNotePane);
      resolve();
    });
  }).catch((error) => reject(error));
});

export const deleteAllPanes = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      const allNotePanes = realm.objects(NOTEPANE_SCHEMA); //query all NOTEPANE_SCHEMA
      realm.delete(allNotePanes);
      resolve();
    });
  }).catch((error) => reject(error));
});

export const queryAllNotePanes = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    const allNotePanes = realm.objects(NOTEPANE_SCHEMA);
    resolve(allNotePanes);
  }).catch((error) => reject(error));
});


export const insertNewNote = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    const allNotes
  })
});

export default new Realm(databaseOptions);
