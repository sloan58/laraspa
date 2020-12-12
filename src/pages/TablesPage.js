import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import apiClient from '../services/api'
import BootstrapTable from 'react-bootstrap-table-next'
import { Row, Col } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

const TablesPage = () => {
  let [songs, setSongs] = useState([])
  useEffect(() => {
    apiClient
      .get('/api/songs')
      .then((res) => {
        setSongs(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const columns = [
    {
      dataField: 'id',
      text: 'Song ID',
    },
    {
      dataField: 'name',
      text: 'Song Name',
      filter: textFilter(),
    },
    {
      dataField: 'artist',
      text: 'Song Artist',
      filter: textFilter(),
    },
  ]

  return (
    <Layout>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <BootstrapTable
            keyField='id'
            data={songs}
            columns={columns}
            pagination={paginationFactory()}
            filter={filterFactory()}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export default TablesPage
