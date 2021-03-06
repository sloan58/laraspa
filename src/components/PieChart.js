import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = () => {
  return (
    <Pie
      data={{
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850',
            ],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      }}
    />
  )
}

export default PieChart
