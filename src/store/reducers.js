/**
 * Combine all reducers in this file and export the combined reducers.
 */

 import { combineReducers } from 'redux' 
 import globalStore from './global/reducer'
 
//  export const history = createBrowserHistory()
 
 /**
  * Merges the main reducer with the router state and dynamically injected reducers
  */
 
 export default function createReducer(injectedReducers = {}) {
   const rootReducer = combineReducers({
     globalStore,
     ...injectedReducers
   })
 
   return rootReducer
 }
 