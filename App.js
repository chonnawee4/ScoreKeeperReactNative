import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './app/config/store'
import { addPlayer } from './app/actions/players'
import { Constants } from 'expo'

import ScoreKeeper from './app/layouts/ScoreKeeper'
import Main from './app/layouts/Main'
import Display from './app/layouts/Display'

const StackApp = StackNavigator({
  ScoreKeeper: { screen: ScoreKeeper },
  Main: { screen: Main },
  Display: { screen: Display }
})

store.subscribe(() => {
  var state = store.getState()
  console.log('New state', state)
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StackApp/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})
