import * as React from 'react'
import { getDataForMeasures } from '../../data'
import { AppState } from '../../App'
import './KpiTile.css'
import { MeasureName } from '../../sharedTypes'

interface Props {
      measure: MeasureName
      selected?: boolean
      appState: AppState
      handleKpiTileClick: (measure: MeasureName) => void
}

export class KpiTile extends React.Component<Props, {}> {
      render() {
            const {
                  measure,
                  selected,
                  appState,
                  handleKpiTileClick
            } = this.props

            return (
                  <div 
                        className={`KpiTile
                              ${selected && 'selected'}
                              ${getDataForMeasures(appState, measure).changedUpwards && 'changedUpwards'}
                        `}
                        onClick={() => handleKpiTileClick(measure)}
                  >
                        <div
                              className='measureName'
                        >
                              {measure}
                        </div>
            
                        <div
                              className='measureValue'
                        >
                              {getDataForMeasures(appState, measure).value}
                        </div>
            
                        <div
                              className='changeMeasure valueChange'
                        >
                              {getDataForMeasures(appState, measure).valueChange}
                        </div>
            
                        <div
                              className='changeMeasure percentChange'
                        >
                              {getDataForMeasures(appState, measure).percentChange}
                        </div>
                  </div>
            )
      }
}
