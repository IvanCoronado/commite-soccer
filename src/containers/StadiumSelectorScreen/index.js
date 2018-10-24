import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect(
    state => ({}),
    dispatch => bindActionCreators({}, dispatch)
)
export class StadiumSelectorScreen extends PureComponent {
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Button
                    onPress={() => navigation.navigate('Stadium')}
                    title="Magma 1"
                />
                <Button
                    onPress={() => navigation.navigate('Auth')}
                    title="Auth"
                />
            </View>
        )
    }
}
