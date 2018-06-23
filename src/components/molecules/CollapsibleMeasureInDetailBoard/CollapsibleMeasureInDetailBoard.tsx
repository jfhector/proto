import * as React from 'react'
import { CollapseButton, Selector } from '../../'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App from '../../../App'
import { AppState, Actions, MeasureName } from '../../../sharedTypes'
import { measureNames } from '../../../data/measureNames'

interface Props {
    children: React.ReactNode
    headerIsSticky?: boolean
    
    // Connecting the component
    appState: AppState
    actions: Actions
    
    // Instance-specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    
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
            appState,
            headerIsSticky,
            handleCollapseButtonClick,
            actions,
            refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv,
            isCorrectInstanceForRefToMeasureInDetailBoardHeaderContainingDiv,
        } = this.props

        const {
            measuresInDetailExpanded,
            selectedMeasure,
            measureInDetailBoardHeaderVisible,
        } = appState

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
                    {
                        [s.expanded]: measuresInDetailExpanded,
                        [s.headerIsSticky]: headerIsSticky,
                        [s.headerContainerVisible]: appState.measureInDetailBoardHeaderVisible
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
                            expanded={measuresInDetailExpanded}
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
                            handleSelectorChange={actions.selectionChanges.changeSelectedMeasure}
                        />
                    </div>
                </div>
                
                {measuresInDetailExpanded &&
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
