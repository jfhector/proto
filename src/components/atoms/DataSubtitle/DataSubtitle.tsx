import * as React from 'react'
import * as s from './DataSubtitle.css'
import * as classNames from 'classnames'
import { AppState, MeasureOption, FiltersSet } from '../../../sharedTypes'

interface Props {
    displayedFilters: FiltersSet,
    selectedMeasure: MeasureOption,
}

export class DataSubtitle extends React.Component<Props, {}> {
    render() {
        const {
            selectedMeasure,
            displayedFilters,
        } = this.props

        const {
            duration,
            dates,
            comparison,
            subcategory,
            region,
            storeFormat,
            customerSegment,
        } = displayedFilters

        return (
            <div
                className={classNames(
                    s.DataSubtitle
                )}
            >
                {`${selectedMeasure} • ${duration} • ${dates} ${comparison}`}
                <br />
                {`${subcategory} • ${region} • ${storeFormat} • ${customerSegment}`}
            </div>
        )
    }
}