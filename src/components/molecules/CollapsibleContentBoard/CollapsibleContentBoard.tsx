import * as React from 'react'
import * as s from './CollapsibleContentBoard.css'
import * as classNames from 'classnames'
import { CollapseButton } from '../../'

interface Props {
    title: string
    children: React.ReactNode
    headerIsSticky?: boolean
    rightNode?: React.ReactNode

    // Instance-specific data extracted from appState upstream
    expanded?: boolean
    headerHighlighted?: boolean
    
    // Instance-specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    
    // Ref assignment
    refAssignmentFunctionforHeaderContainingDiv?: (element: HTMLDivElement) => void
}

export class CollapsibleContentBoard extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        rightNode: null,
        headerIsSticky: false,
        headerHighlighted: false,
        handleCollapseButtonClick: () => { console.log('Button clicked') },
        refAssignmentFunctionforHeaderContainingDiv: undefined,
    }

    render() {
        const {
            title,
            children,
            headerIsSticky,
            handleCollapseButtonClick,
            refAssignmentFunctionforHeaderContainingDiv,
            headerHighlighted,
            expanded,
            rightNode
        } = this.props

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
                    {
                        [s.expanded]: expanded,
                        [s.headerIsSticky]: headerIsSticky,
                        [s.headerHighlighted]: headerHighlighted
                    }
                )}
            >
                <div
                    className={s.headerContainer}
                    ref={refAssignmentFunctionforHeaderContainingDiv}
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

                    <div
                        className={s.rightNodeContainer}
                    >
                        {rightNode}
                    </div>
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
