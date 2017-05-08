export const addPlayer = (player) => {
    return {
        type: 'ADD_PLAYER',
        player
    }
}

export const deletePlayer = (player) => {
    return {
        type: 'DELETE_PLAYER',
        player
    }
}