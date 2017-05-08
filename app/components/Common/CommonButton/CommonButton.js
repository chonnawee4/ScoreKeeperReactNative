import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

export default class CommonButton extends React.Component {

    _handleOnPress = () => {
        this.props.onPress()
    }

    render() {
        var { title } = this.props 

        return (
            <TouchableOpacity style={styles.container} onPress={this._handleOnPress}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        )
    }
}