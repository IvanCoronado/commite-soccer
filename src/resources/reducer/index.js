import { combineReducers } from 'redux'
import { resourceReducer } from 'redux-resource'

export const rootReducer = combineReducers({
    auth: resourceReducer('auth'),
    players: resourceReducer('players'),
    teams: resourceReducer('teams'),
})
