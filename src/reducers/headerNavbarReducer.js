import {
  SET_HEADER_LINKS,
  SET_NAVBAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
  headerLinks: [],
  navbarLinks: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_HEADER_LINKS:
      return {
        ...state,
        headerLinks: actions.payload
      }
    case SET_NAVBAR_LINKS:
      return {
        ...state,
        navbarLinks: actions.payload
      }
      
    default: return state;

  }
};