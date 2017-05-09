import uuid from 'uuid'

export var players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER': 
            return [
                ...state,
                {
                    id: uuid.v1(),
                    name: action.player.name,
                    score: action.player.score
                }
            ]
        case 'DELETE_PLAYER':
            return state.filter(player => {
                return player.id !== action.player.id
            })
        case 'EDIT_PLAYER':
            return state.map(player => {
                return player.id === action.player.id ? action.player : player
            })
        default:
            return state
    }
}