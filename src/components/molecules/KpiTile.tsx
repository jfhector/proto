import * as React from 'react'
import { MeasuresForKpiTiles, getDataForAllMeasures } from '../../data'
import { AppState } from '../../App'
import './KpiTile.css'

interface Props {
      measure: MeasuresForKpiTiles
      selected?: boolean
      appState: AppState
      handleKpiTileClick: (measure: MeasuresForKpiTiles) => void
}

export class KpiTile extends React.Component<Props, {}> {
      render() {
            return (
                  <div 
                        className={`KpiTile
                              ${this.props.selected && 'selected'}
                              ${getDataForAllMeasures(this.props.appState)[this.props.measure].changedUpwards && 'changedUpwards'}
                        `}
                        onClick={() => this.props.handleKpiTileClick(this.props.measure)}
                  >
                        <div
                              className='measureName'
                        >
                              {this.props.measure}
                        </div>
            
                        <div
                              className='measureValue'
                        >
                              {getDataForAllMeasures(this.props.appState)[this.props.measure].value}
                        </div>
            
                        <div
                              className='changeMeasure valueChange'
                        >
                              {getDataForAllMeasures(this.props.appState)[this.props.measure].valueChange}
                        </div>
            
                        <div
                              className='changeMeasure percentChange'
                        >
                              {getDataForAllMeasures(this.props.appState)[this.props.measure].percentChange}
                        </div>
                  </div>
            )
      }
}
