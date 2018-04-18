import * as React from 'react'
import { FiltersSet } from '../../../sharedTypes'
import * as s from './CollapsibleContentModule.css'
import { CollapseButton } from '../..'
import classNames = require('classnames')
import { AppState } from '../../../App'

interface Props {
    title: string
    children: React.ReactNode
    displayedFilters: FiltersSet
    expanded?: boolean
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>
    appState: AppState
}

export class CollapsibleContentModule extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        handleCollapseButtonClick: () => { console.log('handleCollapseButtonClick') },
    }

    render() {
        const {
            title,
            children,
            displayedFilters,
            expanded,
            handleCollapseButtonClick,
            appState,
        } = this.props

        const {
            selectedMeasure
        } = appState

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
                    s.CollapsibleContentModule,
                    {
                        [s.expanded]: expanded,
                    }
                )}
            >

                <div
                    className={s.collapseButtonContainer}
                >
                    <CollapseButton
                        expanded={expanded}
                        handleClick={handleCollapseButtonClick}
                    />

                </div>

                <div
                    className={s.title}
                >
                    {title}
                </div>

                {expanded &&
                    <div
                        className={s.subTitle}
                    >
                        {`${selectedMeasure} • ${duration} • ${dates} ${comparison}`}
                        <br />
                        {`${subcategory} • ${region} • ${storeFormat} • ${customerSegment}`}
                    </div>
                }

                {expanded &&
                    <div
                        className={s.childrenContainer}
                    >
                        {children}
                    </div>
                }

            </div>
        )

    }
}
