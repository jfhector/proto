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
        const {
            measure,
            kpisData,
            selected,
            handleKpiTileClick,
        } = this.props

        return (
            <div
                className={classNames(
                    s.KpiTile,
                    {
                        [s.selected]: selected,
                        [s.changedUpwards]: kpisData.changedUpwards,
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
                    {kpisData.value}
                </div>

                <div
                    className={classNames(
                        s.changeMeasure,
                        s.valueChange
                    )}
                >
                    {kpisData.valueChange}
                </div>

                <div
                    className={classNames(
                        s.changeMeasure,
                        s.percentChange
                    )}
                >
                    {kpisData.percentChange}
                </div>
            </div>
        )
    }
}
