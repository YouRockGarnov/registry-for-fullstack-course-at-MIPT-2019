import React from 'react';
import PropTypes from 'utils/propTypes';

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


import classNames from 'classnames';


const PatientCard = (title, events) => {
  // const bgColor = `bg-${color}`;
  // const classes = classNames(bgColor, className);
  console.log(title);
  console.log(events);

  return (
    <Card>
      <CardBody className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <CardTitle>{title}</CardTitle>
        <CardText>
        </CardText>
      </CardBody>
      <ListGroup flush>
        {events.map((event) => <ListGroupItem>{event.description}</ListGroupItem>)}
      </ListGroup>
      {/*<CardBody>*/}
      {/*  <CardLink tag="a" href="#">*/}
      {/*    Go to details*/}
      {/*  </CardLink>*/}
      {/*  <CardLink tag="a" href="#">*/}
      {/*    More*/}
      {/*  </CardLink>*/}
      {/*</CardBody>*/}
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
