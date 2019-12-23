export const LOAD_USERS = 'LOAD_USERS';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';

export const loadUsersFromServer = () => ({
  type: LOAD_USERS,
  payload: {}
});
