import * as React from 'react'
import { getDataForMeasures } from '../../../data'
import * as s from './KpiTile.css'
import { MeasureName } from '../../../sharedTypes'
import { AppState } from '../../../App'

interface Props {
      measure: MeasureName,
      selected?: boolean,
      handleKpiTileClick?: (measure: MeasureName) => void,
      appState: AppState,
}

export class KpiTile extends React.Component<Props, {}> {
      static defaultProps = {
            handleKpiTileClick: () => {console.log('KPI Tile clicked')}
      }

      render() {
            const {
                  measure,
                  selected,
                  appState,
                  handleKpiTileClick
            } = this.props

            return (
                  <div 
                        className={[
                              s.KpiTile,
                              selected ? s.selected : '',
                              getDataForMeasures(appState, measure).changedUpwards ? s.changedUpwards : '',
                        ].join(' ')}
                        onClick={() => handleKpiTileClick(measure)}
                  >
                        <div
                              className={s.measureName}
                        >
                              {measure}
                        </div>
            
                        <div
                              className={s.measureValue}
                        >
                              {getDataForMeasures(appState, measure).value}
                        </div>
            
                        <div
                              className={[
                                    s.changeMeasure,
                                    s.valueChange
                              ].join(' ')}
                        >
                              {getDataForMeasures(appState, measure).valueChange}
                        </div>
            
                        <div
                              className={[
                                    s.changeMeasure,
                                    s.percentChange
                              ].join(' ')}
                        >
                              {getDataForMeasures(appState, measure).percentChange}
                        </div>
                  </div>
            )
      }
}
