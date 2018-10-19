import React from 'react';
import { connect } from 'react-redux'
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

@connect(
    state => ({
        meAlreadyExist:  state.auth.resources.me
    })
)
export class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.bootstrapAsync();
    }

    bootstrapAsync = async () => {
        const { meAlreadyExist } = this.props
        const initialRoute = meAlreadyExist ? 'App' : 'Auth';
        this.props.navigation.navigate(initialRoute);
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}