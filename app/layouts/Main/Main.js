import React from 'react'
import { View, Text } from 'react-native'

import InputBox from '../../components/InputBox'
import { connect } from 'react-redux'
import { addPlayer } from '../../actions/players'

import styles from './styles'

class Main extends React.Component {

    static navigationOptions = {
        title: 'Main',
    }

    _handleSubmit = (text) => {
        const { navigate } = this.props.navigation
        this.props.dispatch(addPlayer({
            name: 'M',
            score: 0
        }))
        // navigate('Display', { text: text})
    }

    render() {
        return (
            <View style={styles.container}>
                <InputBox resultText={this._handleSubmit}/>
            </View>
        )
    }
}

export default connect()(Main)