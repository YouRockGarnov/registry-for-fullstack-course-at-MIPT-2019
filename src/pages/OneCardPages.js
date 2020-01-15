import {UserProvided, connect} from '../components/UserProvided'
import React from 'react';
import Page from 'components/Page';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PatientCard } from '../components/Card';
import {store} from '../index'
import { Card, Form, Input } from 'reactstrap';
import axios from 'axios';
import { Component } from 'react'

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}

const LOGIN = 'in28minutes';
const PSWD = 'dummy';

function get_one_card_page_render (title, patient_card) {
    return () => <Page title={title} breadcrumbs={[{ name: title, active: true }]}>
        {patient_card}
    </Page>
}

var USER = '';

function get_input_form(user) {
    USER = user;
    return InputForm;
}

class InputForm extends Component {
    handle_form_submit = (event) => {
        event.preventDefault();
        console.log('LLLLLLLLLL');
        console.log(USER);
        console.log(this.refs.event_descr.props.value);
        console.log(Date.now());
        let data = JSON.stringify({user: USER, description: this.refs.event_descr.props.value, datetime: new Date(Date.now()), additional_data: JSON.stringify({url: 'http://localhost:3000/cards' + USER.id.toString()})});
        console.log(data);
        sleep(1000);

        axios.post(process.env.REACT_APP_BACKEND_URL_ROOT + '/events/add_event',
            data,
            { headers: { 'Authorization': 'Basic ' + window.btoa(LOGIN + ':' + PSWD), 'content-type': 'application/json' }})
            .then(resp => console.log(resp));
    };

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            value: ''
        }
    }

    render() {
        return (<Form onSubmit={this.handle_form_submit}>
            <Input
                type="event adding"
                value={this.state.value}
                ref='event_descr'
                name='event_descr'
                placeholder={'New To Do Item...'}
                onChange={e => this.setState({value: e.target.value})}
            />
        </Form>);
    }
}

function get_one_card_page_routes(state){
    let routes = [];
    state.user_data.users.forEach(user => routes.push(<Route exact path={'/cards/' + user.id.toString()}
                                                        component={get_one_card_page_render(user.username,
                                                            PatientCard(user.username, get_input_form(user), state.user_data.events[user.id]))} />));

    return routes;
}

// function get_one_card_page_routes(store) {
//     store.users.forEach(user => )
// }

// Короче надо сделать UserProvided компоненты (страницы с одной карточкой)
// и функцию, которая будет возвращать роуты с ними

//надо законнектить get_one_card_page_routes
// вероятно мне даже не надо сабскрайбить, потому что см index.js with store
// export default store.subscribe(() => get_one_card_page_routes(store.getState()))
export default get_one_card_page_routes;