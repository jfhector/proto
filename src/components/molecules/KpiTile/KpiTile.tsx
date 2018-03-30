import * as React from 'react'
import { getDataForMeasures } from '../../../data'
import * as s from './KpiTile.css'
import { MeasureName } from '../../../sharedTypes'
import { AppState } from '../../../App'
import classNames = require('classnames')

const KpiTile: React.StatelessComponent<{
      measure: MeasureName,
      appState: AppState,
      selected?: boolean,
      handleKpiTileClick?: (measure: MeasureName) => void,
}> = ({
      measure,
      appState,
      selected = false,
      handleKpiTileClick = () => {console.log('KPI Tile clicked')},
}) => (
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

export { KpiTile }
