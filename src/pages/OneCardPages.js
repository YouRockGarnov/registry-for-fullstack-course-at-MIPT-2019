import {UserProvided, connect} from '../components/UserProvided'
import React from 'react';
import Page from 'components/Page';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PatientCard } from '../components/Card';
import {store} from '../index'

function get_one_card_page_render (title, patient_card) {
    return () => <Page title={title} breadcrumbs={[{ name: title, active: true }]}>
        {patient_card}
    </Page>
}

function get_one_card_page_routes(state){
    let routes = [];
    state.user_data.users.forEach(user => routes.push(<Route exact path={'/cards/' + user.id.toString()}
                                                        component={get_one_card_page_render(user.username,
                                                            PatientCard(user.username, <></>, state.user_data.events[user.id]))} />))

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