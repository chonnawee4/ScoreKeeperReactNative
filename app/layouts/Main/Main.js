import React from 'react'
import { View, Text } from 'react-native'

import InputBox from '../../components/InputBox'

import styles from './styles'

export default class Main extends React.Component {

    static navigationOptions = {
        title: 'Main',
    }

    _handleSubmit = (text) => {
        const { navigate } = this.props.navigation
        navigate('Display', { text: text})
    }

    render() {
        return (
            <View style={styles.container}>
                <InputBox resultText={this._handleSubmit}/>
            </View>
        )
    }
}