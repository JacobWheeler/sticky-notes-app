const stickynotes = ( state = [], action ) => {
    switch(action.type) {
        case 'STICKYNOTES':
            return action.stickynotes
        case 'ADD_STICKYNOTE':
            return [action.stickynote, ...state];
        case 'TOGGLE_STICKYNOTE':
            return state.map( stickynote => {
                if (stickynote.id === action.id)
                    return {...stickynote, complete: !stickynote.complete}
                return stickynote
            })
        default:
        return state
    }
}

export default stickynotes;