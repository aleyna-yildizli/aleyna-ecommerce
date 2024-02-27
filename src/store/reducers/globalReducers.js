 import { SET_ROLES, SET_CATEGORIES, SET_THEME, SET_LANGUAGE } from '../actions/globalActions'


const globalInitial = {
    roles : [],
    categories : [],
    theme : '',
    language : '',
};

export default function globalReducers (state = globalInitial, action) {

    switch ( action.type ) {
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
        };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
        };
    case SET_LANGUAGE:
      return {
        ...state,
        theme: action.payload,
        };
    default:
       return state;
    }
}


