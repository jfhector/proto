import * as React from 'react'
import { CollapseButton, Selector } from '../../'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App from '../../../App'
import { MeasureName } from '../../../sharedTypes'
import { measureNames } from '../../../data/measureNames'

interface Props {
    children: React.ReactNode
    headerIsSticky?: boolean

    // Instance-specific data extracted from appState upstream
    selectedMeasure: MeasureName
    expanded: boolean
    headerVisible: boolean
    
    // Instance-specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    handleSelectedMeasureChange: (newlySelectedMeasure: MeasureName) => void
    
    // Ref assignment
    refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv: (element: HTMLDivElement) => void
    isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv: boolean
}

export class CollapsibleMeasureInDetailBoard extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        rightNode: false,
        rightNodeIsSticky: false,
        rightNodeIsHighlighted: false,
        handleCollapseButtonClick: () => { console.log('Button clicked') },
        isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv: false
    }

    render() {
        const {
            children,
            headerIsSticky,
            handleCollapseButtonClick,
            handleSelectedMeasureChange,
            refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv,
            isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv,
            headerVisible,
            selectedMeasure,
            expanded
        } = this.props

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
                    {
                        [s.expanded]: expanded,
                        [s.headerIsSticky]: headerIsSticky,
                        [s.headerContainerVisible]: headerVisible
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
                        className={s.selectorContainer}
                    >
                        <div
                            className={s.selectMeasureLabel}
                        >
                            Selected measure:
                        </div>
                        <Selector
                            optionsArray={measureNames}
                            value={`${selectedMeasure}`}
                            handleSelectorChange={handleSelectedMeasureChange}
                        />
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
