import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'utils/propTypes';

class TableRow extends Component {
  render() {
    //const classes = classNames('bg-gradient-theme', className);

    return (<tr className={this.props.color_classname}>
      <th scope="row">{this.props.patient_info}</th>
      <td>{this.props.phone_number}</td>
      <td>{this.props.last_event_date}</td>
    </tr>)
  }
}

TableRow.propTypes = {
  patient_info: PropTypes.string,
  phone_number: PropTypes.string,
  last_event_date: PropTypes.string,
  color_classname: PropTypes.string
};

TableRow.defaultProps = {
  color_classname: ''
};

export default TableRow;