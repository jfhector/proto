import * as React from 'react'
import { CollapseButton } from '../..'
import * as s from './CollapsibleContentBoard.css'
import classNames = require('classnames')
import App from '../../../App'

interface Props {
    title: string
    children: React.ReactNode
    
    // Instance-specific data extracted from appState upsteam
    expanded?: boolean
    
    // Instance specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>

    refAssignmentFunctions?: typeof App.prototype.refAssignmentFunctions        // TODO: Type to be refactored
}

export class CollapsibleContentBoard extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        rightNode: false,
        rightNodeIsSticky: false,
        rightNodeIsHighlighted: false,
        handleCollapseButtonClick: () => { console.log('Button clicked') }
    }

    render() {
        const {
            title,
            children,
            expanded,
            handleCollapseButtonClick,
            refAssignmentFunctions,
        } = this.props

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
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
