
import React, { Component } from 'react'
import axios from 'axios';
import {connect as reduxConnect, useDispatch, useSelector} from "react-redux";
import { uploadUsers, uploadUsersEvent } from '../actions';
import { UserCard, PatientCard } from 'components/Card'
import { Card, CardBody, CardLink } from 'reactstrap';

const LOGIN = 'in28minutes';
const PSWD = 'dummy';

export const fetchGetUsers = (dispatch) => {
  console.log(process.env.REACT_APP_BACKEND_URL_ROOT);
  console.log(LOGIN);
  console.log(PSWD);


  axios.get(process.env.REACT_APP_BACKEND_URL_ROOT + '/users', { headers: { authorization: 'Basic ' + window.btoa(LOGIN + ':' + PSWD) } }).then(resp => {
    console.log('GET IS READY!');
    return JSON.parse(resp.data).map(user => JSON.parse(user));
  }).then(users => {
    console.log('all:', users);
    dispatch(uploadUsers(users));
    users.forEach(user => {
      console.log(user.id);
      axios.get(process.env.REACT_APP_BACKEND_URL_ROOT + '/users/' + user.id.toString() + '/events',
          { headers: { authorization: 'Basic ' + window.btoa(LOGIN + ':' + PSWD) } }).then(resp => resp.data).then(event => {
            console.log(event);
            dispatch(uploadUsersEvent(user.id, event));
          },
      );
    });

  });

};

export class UserProvided extends Component {
  // users = useSelector(store => store.users);
  // dispatch = useDispatch();

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      events: {},
      isLoading: true
    }
  }

  componentWillMount() {
    console.log('asdfafd');
    this.props.uploadUsers();
  }

  get_all_patient_cards() {
    let patient_cards = this.props.users.slice();

    let get_card_body = (user) =>
      <CardBody>
        <CardLink tag="a" href={"/cards/" + user.id.toString()}>
          Подробнее
        </CardLink>
      </CardBody>;

    return !this.props.isLoading ?
        patient_cards.map(user =>
            PatientCard(user.username, get_card_body(user), user.id in this.props.events ? this.props.events[user.id].slice(0, 3) : []))
        : PatientCard('SHit', {}, ['aaa']);
  };
}


export function connect(Component) {
  return reduxConnect(  store => ({
      users: store.user_data.users,
      events: store.user_data.events,
      isLoading: store.user_data.isLoading
    }),
      dispatch => ({
      uploadUsers() {
        fetchGetUsers(dispatch);
      }
    }))(Component);
}

export default connect(UserProvided);