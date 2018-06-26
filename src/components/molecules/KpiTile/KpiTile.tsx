import * as React from 'react'
import * as s from './KpiTile.css'
import * as classNames from 'classnames'
import { AppState, MeasureOption, MeasureData } from '../../../sharedTypes'

interface Props {
    measure: MeasureOption
    
    // Instance-specific data extracted from appState upsteam
    kpisData: MeasureData,
    selected?: boolean

    // Instance-specific function extracted from appState upsteam
    handleKpiTileClick?: (measure: MeasureOption) => void
}

export class KpiTile extends React.Component<Props, {}> {
    static defaultProps = {
        selected: false,
        handleKpiTileClick: () => { console.log('KPI Tile clicked') },
    }

    render() {
        const { props } = this

        return (
            <div
                className={classNames(
                    s.KpiTile,
                    {
                        [s.selected]: props.selected,
                        [s.changedUpwards]: props.kpisData.changedUpwards,
                    }
                )}
                onClick={() => props.handleKpiTileClick!(props.measure)}
            >
                <div
                    className={s.measureName}
                >
                    {props.measure}
                </div>

                <div
                    className={s.measureValue}
                >
                    {props.kpisData.value}
                </div>

                <div
                    className={classNames(
                        s.changeMeasure,
                        s.valueChange
                    )}
                >
                    {props.kpisData.valueChange}
                </div>

                <div
                    className={classNames(
                        s.changeMeasure,
                        s.percentChange
                    )}
                >
                    {props.kpisData.percentChange}
                </div>
            </div>
        )
    }
}
