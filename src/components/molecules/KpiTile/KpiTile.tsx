import * as React from 'react'
import * as styles from './KpiTile.css'
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
                    styles.KpiTile,
                    {
                        [styles.selected]: props.selected,
                        [styles.changedUpwards]: props.kpisData.changedUpwards,
                    }
                )}
                onClick={() => props.handleKpiTileClick!(props.measure)}
            >
                <div
                    className={styles.measureName}
                >
                    {props.measure}
                </div>

                <div
                    className={styles.measureValue}
                >
                    {props.kpisData.value}
                </div>

                <div
                    className={classNames(
                        styles.changeMeasure,
                        styles.valueChange
                    )}
                >
                    {props.kpisData.valueChange}
                </div>

                <div
                    className={classNames(
                        styles.changeMeasure,
                        styles.percentChange
                    )}
                >
                    {props.kpisData.percentChange}
                </div>
            </div>
        )
    }
}
