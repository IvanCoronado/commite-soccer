import axios from 'axios'
import { actionTypes } from 'redux-resource'
import createActionCreators from 'redux-resource-action-creators';

export const authCreateAction = createActionCreators('create', {
    resourceType: 'auth',
    requestKey: 'login'
});

export const login = (body) => dispatch => {
    dispatch(authCreateAction.pending())

    return axios.post('http://localhost:1337/auth/local', body)
        .then(({ data: { jwt, user } }) => {
            dispatch(authCreateAction.succeeded({
                resources: [{
                    id: 'me',
                    user: user.id,
                    token: jwt
                }]
            }))
            dispatch({
                type: actionTypes.UPDATE_RESOURCES,
                resources: {
                    players: {
                        [user.id]: user
                    }
                }
            })
        })
        .catch(({ response: { data: { message }}}) => {
            dispatch(authCreateAction.failed())
            throw message
        })
}

export const logout = () => dispatch => {
    dispatch({
        type: actionTypes.DELETE_RESOURCES,
        resources: {
            auth: ['me']
        }
    })
}
