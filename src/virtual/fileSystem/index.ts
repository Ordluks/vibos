import { fsDAO } from './dao'
import { openFSDB } from './db'
import { VirtualSubSystem } from '../base'

class VirtualFileSystem extends EventTarget implements VirtualSubSystem {
  constructor() {
    super()
  }

  async _init() {
    const db = await openFSDB()
    fsDAO.injectDB(db)
  }
}

export const virtualFileSystem = new VirtualFileSystem()
