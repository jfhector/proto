import * as React from 'react'
import * as styles from './DataSubtitle.css'
import * as classNames from 'classnames'

import { MeasureOption, FiltersSet } from '../../../sharedTypes'

interface Props {
    displayedFilters: FiltersSet,
    selectedMeasure: MeasureOption,
}

export class DataSubtitle extends React.Component<Props, {}> {
    render() {
        const { props } = this

        return (
            <div
                className={classNames(
                    styles.DataSubtitle
                )}
            >
                {`${props.selectedMeasure} • ${props.displayedFilters.duration} • ${props.displayedFilters.dates} ${props.displayedFilters.comparison}`}
                <br />
                {`${props.displayedFilters.subcategory} • ${props.displayedFilters.region} • ${props.displayedFilters.storeFormat} • ${props.displayedFilters.customerSegment}`}
            </div>
        )
    }
}