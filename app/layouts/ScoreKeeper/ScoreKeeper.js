import React from 'react'
import { View, TextInput, ListView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { addPlayer, deletePlayer } from '../../actions/players'
import ScoreKeeperListView from './ScoreKeeperListView'

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
                <ScoreKeeperListView players={this.props.players} listItemSelected={this.itemSelected}/>
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

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(ScoreKeeper)