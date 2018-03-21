import * as React from 'react'
import { MeasuresForKpiTiles, getDataForAllMeasures } from '../../data'
import { AppState } from '../../App'

interface Props {
      measure: MeasuresForKpiTiles
      selected: boolean
      appState: AppState
      handleKpiTileClick: (measure: MeasuresForKpiTiles) => void
}

export class KpiTile extends React.Component<Props, {}> {
      render() {
            return (
                  <div 
                        className='KpiTile'
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
                              className='valueChange'
                        >
                              {getDataForAllMeasures(this.props.appState)[this.props.measure].valueChange}
                        </div>
            
                        <div
                              className='percentChange'
                        >
                              {getDataForAllMeasures(this.props.appState)[this.props.measure].percentChange}
                        </div>
                  </div>
            )
      }
}
