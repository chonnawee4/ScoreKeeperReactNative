import React from 'react'
import { View, TextInput } from 'react-native'

import CommonButton from '../Common/CommonButton'

import styles from './styles'

export default class InputBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    _handleOnPress = () => {
        this.props.resultText(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput} 
                    placeholder='Input me' 
                    autoCorrect={false}
                    onChangeText={(input) => this.setState({input})}
                    value={this.state.input}/>
                <CommonButton title='Click me' onPress={this._handleOnPress}/>
            </View>
        )
    }
}