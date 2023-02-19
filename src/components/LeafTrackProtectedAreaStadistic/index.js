import React from 'react';
import './LeafTrackProtectedAreaStatistics.scss'
import { AreaChart } from '../../shared/charts/AreaChart'

export function LeafTrackProtectedAreaStatistics({data, labels}) {
  return (
    <div className='stats'>
      <AreaChart data={data} labels={labels} />
    </div>
  )
} 