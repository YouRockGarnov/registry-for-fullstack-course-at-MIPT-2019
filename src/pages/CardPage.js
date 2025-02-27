import React, { Component } from 'react'
import Page from 'components/Page';

import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { event } from 'react-ga';
import axios from 'axios';
import string from 'd3-geo/src/path/string';
import {UserProvided, connect} from '../components/UserProvided'
import { Route } from 'react-router-dom';



class CardPage extends UserProvided {
  render() {
    console.log('STORED STATE');
    console.log(this.props.users);

    let patient_cards = this.get_all_patient_cards();

    const rows = [];
    for (let i = 0; i < patient_cards.length / 2 + (patient_cards.length % 2 === 0 ? 0 : 1); i++ ) {
      rows.push(
        <Row>
          <Col md={6} sm={6} xs={12} className="mb-3">
            {patient_cards[i*2]}
          </Col>
          <Col md={6} sm={6} xs={12} className="mb-3">
            {i*2 + 1 < patient_cards.length ? patient_cards[i*2 + 1] : null}
          </Col>
        </Row>)
    }

    console.log(this.state);
    return (
      <Page title="Пациенты" breadcrumbs={[{ name: 'Карточки', active: true }]}>
        {rows}
      </Page>
    );
  };
}

export default connect(CardPage);
