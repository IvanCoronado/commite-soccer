import firebase from 'react-native-firebase'
import { actionTypes } from 'redux-resource'
import createActionCreators from 'redux-resource-action-creators'

export const signInAction = createActionCreators('create', {
    resourceType: 'auth',
    requestKey: 'signIn',
})

export const signIn = ({ email, password }) => dispatch => {
    dispatch(signInAction.pending())

    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(
                signInAction.succeeded({
                    resources: [
                        {
                            id: 'me',
                            user: user.uid,
                        },
                    ],
                })
            )
        })
        .catch(({ code, message }) => {
            dispatch(signInAction.failed())
            throw message
        })
}

export const signUpAction = createActionCreators('create', {
    resourceType: 'auth',
    requestKey: 'signUp',
})

export const signUp = ({ email, password }) => dispatch => {
    dispatch(signUpAction.pending())

    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(
                signUpAction.succeeded({
                    resources: [
                        {
                            id: 'me',
                            user: user.uid,
                        },
                    ],
                })
            )
            dispatch({
                type: actionTypes.UPDATE_RESOURCES,
                resources: {
                    players: {
                        [user.uid]: user,
                    },
                },
            })
        })
        .catch(({ code, message }) => {
            dispatch(signUpAction.failed())
            throw message
        })
}

export const logout = () => dispatch => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_RESOURCES,
                resources: {
                    auth: ['me'],
                },
            })
        })
        .catch(({ code, message }) => {
            console.log(message)
        })
}
