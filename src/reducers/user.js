import { LOAD_USERS } from '../actions/user';
import axios from 'axios';

const initialState = {
  users: [],
  events: {},
  isLoading: true
};

const LOGIN = 'in28minutes';
const PSWD = 'dummy';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      state = initialState;

      console.log(process.env.REACT_APP_BACKEND_URL_ROOT);
      console.log(LOGIN);
      console.log(PSWD);

      return axios.get(process.env.REACT_APP_BACKEND_URL_ROOT +'/users', { headers: { authorization: 'Basic ' + window.btoa(LOGIN + ":" + PSWD) } }).then(resp => {
        console.log('GET IS READY!');
        return JSON.parse(resp.data).map(user => JSON.parse(user));
      }).then(users => {
        console.log('Users');
        console.log(users);
        users.forEach(user => {
          console.log(user.id);
          axios.get(process.env.REACT_APP_BACKEND_URL_ROOT +'/users/' + user.id.toString() + '/events',
            { headers: { authorization: 'Basic ' + window.btoa(LOGIN + ":" + PSWD) } }).then(resp => {

              console.log('state');
              console.log(state);
              state.events[user.id] = resp.data;
              return state;
          });
        });

        console.log('ADSFASDF');
        console.log(users);
        return { users: users, isLoading: false };
        });
    default:
      return state;
  }
};