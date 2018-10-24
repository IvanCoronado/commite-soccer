import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { signInAnonymous } from '../../resources/actions/auth'
import { getStatus } from 'redux-resource'

@connect(
    state => ({
        createStatus: getStatus(state, 'auth.meta.me.createStatus'),
        me: state.auth.resources.me,
    }),
    dispatch =>
        bindActionCreators(
            {
                signInAnonymous,
            },
            dispatch
        )
)
export class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props)
        this.bootstrapAsync()
    }

    componentDidUpdate() {
        const { createStatus: { succeeded } = {} } = this.props

        if (succeeded) {
            this.goToApp()
        }
    }

    bootstrapAsync = async () => {
        const { me, signInAnonymous } = this.props

        if (me) {
            this.goToApp()
        } else {
            signInAnonymous()
        }
    }

    goToApp = () => this.props.navigation.navigate('App')

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ActivityIndicator size="large" />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
