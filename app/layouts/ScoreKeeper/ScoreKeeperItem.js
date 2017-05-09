import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { deletePlayer, editPlayer } from '../../actions/players'

import styles from './styles'

class ScoreKeeperItem extends React.Component {

    _handleOnPress = (title) => {
        let newPlayer
        switch(title) {
            case '+1':
                newPlayer = {
                    ...this.props.player,
                    score: this.props.player.score + 1
                }
                this.props.dispatch(editPlayer(newPlayer))
                break
            case '-1':
                newPlayer = {
                    ...this.props.player,
                    score: this.props.player.score > 0 ? this.props.player.score - 1 : 0
                }
                this.props.dispatch(editPlayer(newPlayer))
                break
            default:
                this.props.dispatch(deletePlayer(this.props.player))
        }
    }

    renderButtonFromArray = (array) => {
        return array.map(item => {
            return <Button key={item} title={item} onPress={this._handleOnPress.bind(this, item)}></Button>
        })
    }

    render() {
        const { name, score } = this.props.player
        return (
            <View>
                <Text>{`${name} has ${score} point(s)`}</Text>
                <View style={styles.groupBtn}>
                    {this.renderButtonFromArray(['+1', '-1', 'X'])}
                </View>
            </View>
        )
    }
}

export default connect()(ScoreKeeperItem)