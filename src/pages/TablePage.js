import Page from 'components/Page';
import TableRow from '../components/Table/TableRow';
import React from 'react';
import { Card, CardBody, CardHeader, Col, ListGroupItem, Row, Table } from 'reactstrap';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

const get_table_rows = () => {
  return [
    <TableRow patient_info='Очередной пациент' phone_number='+71234567890' last_event_date='вчера' />
  ]
};

const TablePage = () => {
  return (
    <Page
      title="Таблица"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Общее</CardHeader>
            <CardBody>
              <Table>
                <thead>
                  <tr>
                    <th scope="col">Пациент</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Дата последнего события</th>
                  </tr>
                </thead>
                <tbody>
                  {get_table_rows().map((row) => row)}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default TablePage;
