import React from 'react'
import { ListView, Text } from 'react-native'
import ScoreKeeperItem from './ScoreKeeperItem'

import styles from './styles'

export default class ScoreKeeperListView extends React.Component {
    constructor(props) {
        super(props)
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.setState({
             dataSource: ds.cloneWithRows(nextProps.players)
        })
    }
    
    render() {
        return (
             <ListView
                style={styles.listView}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ScoreKeeperItem player={rowData}/>}
            />
        )
    }
}