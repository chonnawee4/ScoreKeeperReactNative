import React from 'react'
import { View, Text } from 'react-native'

export default class Display extends React.Component {

    static navigationOptions = {
        title: 'Display',
    }

    render() {
        const { params } = this.props.navigation.state
        return (
            <View>
                <Text>{params.text}</Text>
            </View>
        )
    }
}