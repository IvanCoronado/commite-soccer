import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../resources/actions/auth'

import { View, Button } from 'react-native'

@connect(
    state => ({}),
    dispatch =>
        bindActionCreators(
            {
                logout,
            },
            dispatch
        )
)
export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    }

    render() {
        return (
            <View>
                <Button
                    title="Show me more of the app"
                    onPress={this._showMoreApp}
                />
                <Button
                    title="Actually, sign me out :)"
                    onPress={this._signOutAsync}
                />
            </View>
        )
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other')
    }

    _signOutAsync = async () => {
        this.props.logout()
        this.props.navigation.navigate('Auth')
    }
}
