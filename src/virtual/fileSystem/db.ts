import { DBSchema, openDB } from "idb";

export interface FSDB extends DBSchema {
    files: {
        key: string
        value: File
    }
}

export const openFSDB = () => openDB<FSDB>('fsdb', 1, {
    upgrade: (db, oldVersion, _newVersion, transaction) => {
        if (oldVersion === 0) {
            db.createObjectStore('files')
        }
    }
})