import firebase from 'react-native-firebase'
import { actionTypes } from 'redux-resource'
import createActionCreators from 'redux-resource-action-creators'

export const signInAction = createActionCreators('update', {
    resourceType: 'auth',
    requestKey: 'signIn',
})

export const signIn = ({ email, password }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {})
        .catch(({ code, message }) => {
            throw message
        })
}
