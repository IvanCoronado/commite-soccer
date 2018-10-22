import axios from 'axios'
import { actionTypes } from 'redux-resource'
import createActionCreators from 'redux-resource-action-creators'

export const signInAction = createActionCreators('create', {
    resourceType: 'auth',
    requestKey: 'signIn',
})

export const signIn = body => dispatch => {
    dispatch(signInAction.pending())

    return axios
        .post('http://localhost:1337/auth/local', body)
        .then(({ data: { jwt, user } }) => {
            dispatch(
                signInAction.succeeded({
                    resources: [
                        {
                            id: 'me',
                            user: user.id,
                            token: jwt,
                        },
                    ],
                })
            )
            dispatch({
                type: actionTypes.UPDATE_RESOURCES,
                resources: {
                    players: {
                        [user.id]: user,
                    },
                },
            })
        })
        .catch(({ response: { data: { message } } }) => {
            dispatch(signInAction.failed())
            throw message
        })
}

export const signUpAction = createActionCreators('create', {
    resourceType: 'auth',
    requestKey: 'signUp',
})

export const signUp = body => dispatch => {
    dispatch(signUpAction.pending())

    return axios
        .post('http://localhost:1337/auth/local/register', body)
        .then(({ data: { jwt, user } }) => {
            dispatch(
                signUpAction.succeeded({
                    resources: [
                        {
                            id: 'me',
                            user: user.id,
                            token: jwt,
                        },
                    ],
                })
            )
            dispatch({
                type: actionTypes.UPDATE_RESOURCES,
                resources: {
                    players: {
                        [user.id]: user,
                    },
                },
            })
        })
        .catch(({ response: { data: { message } } }) => {
            dispatch(signUpAction.failed())
            throw message
        })
}

export const logout = () => dispatch => {
    dispatch({
        type: actionTypes.DELETE_RESOURCES,
        resources: {
            auth: ['me'],
        },
    })
}
