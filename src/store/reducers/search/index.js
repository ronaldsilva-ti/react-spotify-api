const SEARCH_NAME_ALBUM = 'SEARCH_NAME_ALBUM';


const INITIAL_STATE = []


export default function ( state = INITIAL_STATE, action ){
    switch (action.type) {
        case SEARCH_NAME_ALBUM:
            return [action.payload]
        default:
            return state;
    }
}

export const searchName = (payload) => ({
    type: SEARCH_NAME_ALBUM,
    payload: payload
})