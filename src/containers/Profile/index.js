import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TouchableHighlight, View, Text } from 'react-native'
import { getResources } from 'redux-resource'
import { logout } from '../../resources/actions/auth'

@connect(
    state => ({
        me: getResources(state.players, (resource, meta) => meta && meta.me)[0],
    }),
    dispatch =>
        bindActionCreators(
            {
                logout,
            },
            dispatch
        )
)
export class ProfileScreen extends React.PureComponent {
    render() {
        const { logout, me } = this.props

        return (
            <View style={{ flex: 1 }}>
                <Text>Hola, </Text>

                <TouchableHighlight onPress={logout}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
