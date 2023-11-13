import { IDBPDatabase } from 'idb'
import { v4 as uuid } from 'uuid'
import { FSDB } from './db'

type DBType = IDBPDatabase<FSDB>

let db: DBType

export const fsDAO = {
  injectDB: (database: DBType) => {
    db = database
  },

  createFile: async (
    bits: BlobPart[],
    name: string,
    options: FilePropertyBag
  ) => {
    const transaction = db.transaction('files', 'readwrite')
    const file = new File(bits, name, options)
    await transaction.store.add(file, uuid())    
  }
}
