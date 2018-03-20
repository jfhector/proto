import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../stylepresets'
import { MeasuresForKpiTiles, getDataForAllMeasures } from '../../data'
import { AppState } from '../../App'

interface Props {
      measure: MeasuresForKpiTiles
      selected: boolean
      appState: AppState
      handleKpiTileClick: (measure: MeasuresForKpiTiles) => void
      className?: string
}

export const KpiTile_preStyle: React.StatelessComponent<Props> = (props: Props) => (
      <div 
            className={props.className}
            onClick={() => props.handleKpiTileClick(props.measure)}
      >
            <div
                  className='measureName'
            >
                  {props.measure}
            </div>

            <div
                  className='measureValue'
            >
                  {getDataForAllMeasures(props.appState)[props.measure].value}
            </div>

            <div
                  className='measureValueChange'
            >
                  {getDataForAllMeasures(props.appState)[props.measure].valueChange}
            </div>

            <div
                  className='measurePercentChange'
            >
                  {getDataForAllMeasures(props.appState)[props.measure].percentChange}
            </div>
      </div>
)
