export var players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER': 
            return [
                ...state,
                {
                    id: state.length,
                    name: action.player.name,
                    score: action.player.score
                }
            ]
        case 'DELETE_PLAYER':
            return state.filter(player => {
                return player.id !== action.player.id
            })
        default:
            return state
    }
}