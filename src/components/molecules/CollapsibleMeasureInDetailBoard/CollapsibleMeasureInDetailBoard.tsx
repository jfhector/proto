import * as React from 'react'
import { CollapseButton } from '../..'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App from '../../../App'

interface Props {
    title: string
    children: React.ReactNode
    expanded?: boolean
    rightNode?: React.ReactNode
    rightNodeIsSticky?: boolean
    rightNodeIsHighlighted?: boolean
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    refAssignmentFunctions: typeof App.prototype.refAssignmentFunctions
}

export class CollapsibleMeasureInDetailBoard extends React.Component<Props, {}> {
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
            rightNode,
            rightNodeIsSticky,
            rightNodeIsHighlighted,
            handleCollapseButtonClick,
            refAssignmentFunctions,
        } = this.props

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
                    {
                        [s.expanded]: expanded,
                        [s.rightNodeIsSticky]: rightNodeIsSticky,
                        [s.rightNodeIsHighlighted]: rightNodeIsHighlighted,
                    }
                )}
            >
                <div
                    className={s.header}
                    ref={refAssignmentFunctions.refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv}
                >
                    Header
                </div>
                
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
