import * as React from 'react'
import { CollapseButton } from '../..'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App, { AppState } from '../../../App'
import { MeasureName } from '../../../sharedTypes'
import { getDataForMeasures } from '../../../data'
import { measureNames } from '../../../data/measureNames'

interface Props {
    children: React.ReactNode
    appState: AppState
    headerIsSticky?: boolean
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    refAssignmentFunctions: typeof App.prototype.refAssignmentFunctions
    actions: typeof App.prototype.actions
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

        let dataForSelectedMeasure = getDataForMeasures(appState, appState.selectedMeasure!)

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
                    {
                        [s.expanded]: measuresInDetailExpanded,
                        [s.measureChangedUpwards]: dataForSelectedMeasure.changedUpwards,
                        [s.headerIsSticky]: headerIsSticky,
                        [s.headerContainerVisible]: appState.measureInDetailBoardHeaderVisible,
                        [s.measureSelectorVisible]: appState.measureSelectorVisible
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
                        onClick={actions.toggleMeasureSelectorVisible}
                    >
                        Measure in detail
                    </div>

                    {appState.measureSelectorVisible &&
                        <div
                            className={s.backdropToCatchClicksAwayFromMeasureSelector}
                            onClick={actions.toggleMeasureSelectorVisible}
                        />
                    }
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
