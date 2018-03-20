import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../stylepresets'
import { getKpisData, MeasuresForKpiTiles } from '../../data'
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
      </div>
)
