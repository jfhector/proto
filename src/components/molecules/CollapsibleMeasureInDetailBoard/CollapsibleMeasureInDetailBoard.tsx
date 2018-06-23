import * as React from 'react'
import { CollapseButton, Selector } from '../../'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App from '../../../App'
import { AppState, Actions, MeasureName } from '../../../sharedTypes'
import { getDataForMeasures } from '../../../data'
import { measureNames } from '../../../data/measureNames'

interface Props {
    children: React.ReactNode
    headerIsSticky?: boolean

    // Connecting the component
    appState: AppState
    actions: Actions

    // Instance-specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    
    refAssignmentFunctions: typeof App.prototype.refAssignmentFunctions         // TODO: State to be refactored
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
            children,
            appState,
            headerIsSticky,
            handleCollapseButtonClick,
            refAssignmentFunctions,
            actions,
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
                    ref={refAssignmentFunctions.refAssignmentFunctionforRefToMeasureInDetailBoardHeaderContainingDiv}
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
