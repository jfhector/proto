import * as React from 'react'
import { FiltersSet, MeasureName } from '../../../sharedTypes'
import * as s from './CollapsibleContentModule.css'
import { CollapseButton } from '../..'
import classNames = require('classnames')

interface Props {
    title: string
    children: React.ReactNode
    
    // Instance specific data extracted from appState upstream
    expanded?: boolean
    displayedFilters: FiltersSet
    
    // Instance specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>
}



export class CollapsibleContentModule extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: true,
        handleCollapseButtonClick: () => { console.log('handleCollapseButtonClick') },
    }

    render() {
        const {
            title,
            children,
            expanded,
            handleCollapseButtonClick,
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
                        className={s.childrenContainer}
                    >
                        {children}
                    </div>
                }

            </div>
        )

    }
}
