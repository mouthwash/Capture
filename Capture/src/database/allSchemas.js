import Realm from 'realm';

export const NOTEPANE_SCHEMA = 'NotePane'; //schema name
export const NOTE_SCHEMA = 'Note'; //schema name
export const XP_SCHEMA = 'Xp';

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

export const XpSchema = {
  name: XP_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: { type: 'int', default: 1 },
    xpPercent: { type: 'float', default: 0.0 },
    xpCount: { type: 'int', default: 0 },
    xpToNext: { type: 'int', default: 20 },
    level: { type: 'int', default: 1 },
  }
};

export const databaseOptions = {
  path: 'Capture.realm',
  schema: [NoteSchema, NotePaneSchema, XpSchema],
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

export const createXP = async () => {
  const realm = await Realm.open(databaseOptions);
  try {
    realm.write(() => {
      const XPBar = realm.objectForPrimaryKey(XP_SCHEMA, 1);
      if (XPBar == null) {
        realm.create(XP_SCHEMA, {
           id: 1, xpPercent: 0.0, xpCount: 0, xpToNext: 20, level: 1,
        });
      }
    });
  } catch (err) {
    console.log('createXP', err);
  }
};

export const updateXP = async () => {
  try {
    const realm = await Realm.open(databaseOptions);
    const XPToUpdate = await realm.objectForPrimaryKey(XP_SCHEMA, 1);
    realm.write(() => {
    XPToUpdate.xpCount += 10;
    console.log('XPCOUNTINUPDATE=========', XPToUpdate.xpCount);
    XPToUpdate.xpPercent = XPToUpdate.xpCount / XPToUpdate.xpToNext;
    console.log('XPPER=======', XPToUpdate.xpPercent);
    if (XPToUpdate.xpCount >= XPToUpdate.xpToNext) {
      XPToUpdate.level++;
      XPToUpdate.xpCount = 0;
      XPToUpdate.xpToNext += 20;
      XPToUpdate.xpPercent = XPToUpdate.xpCount / XPToUpdate.xpToNext;
    }
  });
  } catch (err) {
    console.log('updateXP', err);
  }
};

export const getXP = async () => {
  try {
    const realm = await Realm.open(databaseOptions);
    const XPBar = await realm.objectForPrimaryKey(XP_SCHEMA, 1);
    return XPBar;
  } catch (err) {
    console.log('getXP', err);
  }
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default new Realm(databaseOptions);
