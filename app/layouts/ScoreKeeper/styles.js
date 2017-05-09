import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    addPlayerBox: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textInput: {
        width: '60%',
    },
    button: {
        color: '#000'
    },
    listView: {
        height: 390,
        width: '90%'
    },
    groupBtn: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center'
    }
}) 

export default styles