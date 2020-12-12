import React from 'react'
import Layout from '../layout/Layout'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import DoughnutChart from '../components/DoughnutChart'
import { Row, Col, Card } from 'react-bootstrap'

const HomePage = () => {
  return (
    <Layout>
      <Row>
        <Col md={{ span: 5, offset: 1 }}>
          <Card className='mb-2'>
            <Card.Body>
              <BarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 5 }}>
          <Card className='mb-2'>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 1 }}>
          <Card className='mb-2'>
            <Card.Body>
              <PieChart />
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 5 }}>
          <Card className='mb-2'>
            <Card.Body>
              <DoughnutChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default HomePage
