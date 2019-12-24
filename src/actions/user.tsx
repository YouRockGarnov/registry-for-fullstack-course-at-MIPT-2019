export const UPLOAD_USERS = 'UPLOAD_USERS';
export const UPLOAD_USERS_EVENT = 'UPLOAD_USERS_EVENT';

export const uploadUsers = (users: object) => ({
  type: UPLOAD_USERS,
  payload: {users}
});

export const uploadUsersEvent = (id: bigint, event: object) => ({
  type: UPLOAD_USERS_EVENT,
  payload: {id, event}
});
