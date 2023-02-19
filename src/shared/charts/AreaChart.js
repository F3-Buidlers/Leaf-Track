import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Estimated mean full NDVI'
    }
  }
}

export function AreaChart ({ labels = [], data = [] }) {
  const dataConfig = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Healthy - vegetation reflection',
        data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
  return <Line options={options} data={dataConfig} className='areachart' />
}
