import {
SEARCH_SHOWS,
SET_LOADING,
SET_SINGLE_SHOW,
CLEAR_SINGLE_SHOW,
} from '../Types';

    const showsReducers = (state, action) => {
        switch(action.type){
            case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case SEARCH_SHOWS:
            return{
                ...state,
                shows: action.payload,
                loading:false,
            };
        case SET_SINGLE_SHOW:
            return {
                ...state,
                singleShow:action.payload,
                loading:false
            };
        case CLEAR_SINGLE_SHOW:
            return {
                ...state,
                singleshow:{}
            };
        default:
            return state;
        }
    };


export default showsReducers;