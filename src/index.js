import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persitor } from './store'
import { theme } from './theme'
import { Navigator } from './navigator/index'

import firebase from 'react-native-firebase'

global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest

export class App extends Component {
    componentDidMount() {
        firebase
            .auth()
            .signInAnonymously()
            .then(credential => {
                if (credential) {
                    console.log('default app user ->', credential.user.toJSON())
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <PersistGate
                        persistor={persitor}
                        loading={
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <ActivityIndicator size="large" />
                            </View>
                        }
                    >
                        <Navigator />
                    </PersistGate>
                </ThemeProvider>
            </Provider>
        )
    }
}
