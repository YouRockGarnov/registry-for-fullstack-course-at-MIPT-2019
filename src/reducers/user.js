import { UPLOAD_USERS, UPLOAD_USERS_EVENT } from '../actions/user';
import axios from 'axios';

const initialState = {
  users: [],
  events: {},
  isLoading: true
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_USERS:
      return { ...state, users: action.payload.users, isLoading: false };
    case UPLOAD_USERS_EVENT:
      return { ...state, events: {...state.events, [action.payload.id]: action.payload.event} };

    default:
      return state;
  }
};