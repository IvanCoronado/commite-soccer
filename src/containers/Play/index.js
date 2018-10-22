import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TouchableHighlight, View, Text } from 'react-native'

@connect(
    state => ({}),
    dispatch => bindActionCreators({}, dispatch)
)
export class PlayScreen extends React.PureComponent {
    render() {
        const {} = this.props

        return (
            <View style={{ flex: 1 }}>
                <Text>Play</Text>
            </View>
        )
    }
}
