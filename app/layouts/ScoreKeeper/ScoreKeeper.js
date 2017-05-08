import React from 'react'
import { View, TextInput, ListView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { addPlayer } from '../../actions/players'

import styles from './styles'

class ScoreKeeper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    _handleOnPress = () => {
        if (this.state.input) {
            this.props.dispatch(addPlayer({
                name: this.state.input,
                score: 0
            }))
            this.setState({
                input: ''
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addPlayerBox}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Player Name' 
                        autoCorrect={false}
                        onChangeText={(input) => this.setState({input})}
                        value={this.state.input}/>
                    <Button onPress={this._handleOnPress} title='Add Player'/>
                </View>
            </View>
        )
    }
}

export default connect()(ScoreKeeper)