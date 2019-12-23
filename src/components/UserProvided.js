
import React, { Component } from 'react'
import axios from 'axios';
import CardPage from '../pages/CardPage';
import {loadUsersFromServer} from "../actions";
import {connect as reduxConnect, useDispatch, useSelector} from "react-redux";

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
    this.props.loadUsersFromServer();
  }
}

export function connect(Component) {
  return reduxConnect(  store => ({
      users: store.users,
    }),
    dispatch => ({
      loadUsersFromServer() {
        dispatch(loadUsersFromServer());
      }
    }))(Component);
}

export default connect(UserProvided);