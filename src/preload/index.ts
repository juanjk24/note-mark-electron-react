import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(!process.contextIsolated) {
  throw new Error('ContextIsolated must be enabled for security reasons.')
}

try {
  contextBridge.executeInMainWorld('context', {
    // todo
  })
} catch (error) {
  console.error(error)
}