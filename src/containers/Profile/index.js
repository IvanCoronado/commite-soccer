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
    logout = () => {
        const { logout, navigation } = this.props

        logout().then(() => {
            navigation.navigate('AuthLoading')
        })
    }
    render() {
        const { me } = this.props

        return (
            <View style={{ flex: 1 }}>
                <Text>Hola, </Text>

                <TouchableHighlight onPress={this.logout}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
