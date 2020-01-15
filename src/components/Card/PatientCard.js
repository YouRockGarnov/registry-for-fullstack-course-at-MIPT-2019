import React from 'react';
import PropTypes from 'utils/propTypes';
import { Form, Input } from 'reactstrap';
import classNames from 'classnames';

import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  CardTitle,
  ListGroup,
  ListGroupItem,
  CardLink,
} from 'reactstrap';
import axios from 'axios';

const PatientCard = (title, Card_body, events) => {
  // const bgColor = `bg-${color}`;
  // const classes = classNames(bgColor, className);

  return (
    <Card>
      <CardBody className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <CardTitle>{title}</CardTitle>
        <CardText>
        </CardText>
      </CardBody>
      <ListGroup flush>
        {events.map((event) => <Button href={JSON.parse(event.additional_data)['url']} color={'light'}>{event.description}</Button>)}
      </ListGroup>
      <Card_body/>
    </Card>
  );
};

PatientCard.propTypes = {
  color: PropTypes.string,
  header: PropTypes.node,
    avatar: PropTypes.string,
    avatarSize: PropTypes.number,
  name: PropTypes.string,
    date: PropTypes.date,
    className: PropTypes.string,
    children: PropTypes.element,
};
//
// AnnouncementCard.defaultProps = {
//   color: 'gradient-secondary',
//   avatarSize: 60,
// };

export default PatientCard;
