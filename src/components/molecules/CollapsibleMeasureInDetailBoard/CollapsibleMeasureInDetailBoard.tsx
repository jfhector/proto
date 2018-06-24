import * as React from 'react'
import { CollapseButton, Selector } from '../../'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App from '../../../App'
import { MeasureName } from '../../../sharedTypes'

interface Props {
    children: React.ReactNode
    headerIsSticky?: boolean
    rightNode?: React.ReactNode
    // rightNode?: JSX.IntrinsicElements

    // Instance-specific data extracted from appState upstream
    selectedMeasure: MeasureName
    expanded?: boolean
    headerHighlighted?: boolean
    
    // Instance-specific function extracted from actions upstream
    handleSelectedMeasureChange: (newlySelectedMeasure: MeasureName) => void
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    
    // Ref assignment
    refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv?: (element: HTMLDivElement) => void
    isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv?: boolean
}

export class CollapsibleMeasureInDetailBoard extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        rightNode: null,
        headerIsSticky: false,
        headerHighlighted: false,
        handleCollapseButtonClick: () => { console.log('Button clicked') },
        refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv: undefined,
        isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv: false,
    }

    render() {
        const {
            children,
            headerIsSticky,
            handleCollapseButtonClick,
            handleSelectedMeasureChange,
            refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv,
            isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv,
            headerHighlighted,
            selectedMeasure,
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
                        [s.headerContainerVisible]: headerHighlighted
                    }
                )}
            >
                <div
                    className={s.headerContainer}
                    ref={isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv ? refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv : undefined}
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
                        Measure in detail
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
