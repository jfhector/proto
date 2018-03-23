import * as React from 'react'
import { getDataForMeasures } from '../../../data'
import * as s from './KpiTile.css'
import { MeasureName } from '../../../sharedTypes'
import { AppState } from '../../../App'
import classNames = require('classnames')

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
                        className={classNames(
                              s.KpiTile,
                              {
                                    [s.selected]: selected,
                                    [s.changedUpwards]: getDataForMeasures(appState, measure).changedUpwards,
                              }
                        )}
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
                              className={classNames(
                                    s.changeMeasure,
                                    s.valueChange
                              )}
                        >
                              {getDataForMeasures(appState, measure).valueChange}
                        </div>
            
                        <div
                              className={classNames(
                                    s.changeMeasure,
                                    s.percentChange
                              )}
                        >
                              {getDataForMeasures(appState, measure).percentChange}
                        </div>
                  </div>
            )
      }
}
