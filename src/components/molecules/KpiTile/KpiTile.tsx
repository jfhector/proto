import * as React from 'react'
import { getDataForMeasures } from '../../../data'
import * as s from './KpiTile.css'
import { AppState, MeasureName } from '../../../sharedTypes'
import classNames = require('classnames')

interface Props {
    measure: MeasureName
    
    // Connecting this component
    appState: AppState
    
    // Instance-specific data extracted from appState upsteam
    selected?: boolean

    // Instance-specific function extracted from appState upsteam
    handleKpiTileClick?: (measure: MeasureName) => void
}

export class KpiTile extends React.Component<Props, {}> {
    static defaultProps = {
        selected: false,
        handleKpiTileClick: () => { console.log('KPI Tile clicked') },
    }

    render() {
        const {
            measure,
            appState,
            selected,
            handleKpiTileClick,
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
                onClick={() => handleKpiTileClick!(measure)}
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
