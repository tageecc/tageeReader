import * as TYPES from '../actions/types';

const initialState = {
    article: {},
    status: null,
};

export default function reader(state = initialState, action) {
    switch (action.type) {
        case TYPES.openReader: {
            return {
                ...state,
                article: action.article
            }
        }
        default:
            return state
    }
}