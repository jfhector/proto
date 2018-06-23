import * as React from 'react'
import { AppState, FiltersSet } from '../../../sharedTypes'
import * as s from './CollapsibleContentModule.css'
import { CollapseButton } from '../..'
import classNames = require('classnames')

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
        } = displayedFilters            // TODO: REPLACE THIS WITH appState: AppState, so that I don't need to import a 'FilterSet' type (and can get rid of this type definition)

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
