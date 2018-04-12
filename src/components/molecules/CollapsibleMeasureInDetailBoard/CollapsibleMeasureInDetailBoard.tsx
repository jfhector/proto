import * as React from 'react'
import { CollapseButton } from '../..'
import * as s from './CollapsibleMeasureInDetailBoard.css'
import classNames = require('classnames')
import App, { AppState } from '../../../App'
import { MeasureName } from '../../../sharedTypes'
import { getDataForMeasures } from '../../../data'

const PROTOIMG_selectorCaret = require('../../../assets/PROTOIMG_selectorCaret.png')

interface Props {
    children: React.ReactNode
    appState: AppState
    headerIsSticky?: boolean
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
            children,
            appState,
            headerIsSticky,
            handleCollapseButtonClick,
            refAssignmentFunctions,
        } = this.props

        const {
            measuresInDetailExpanded,
            selectedMeasure,
            measureSelectorContainerVisible,
        } = appState

        let dataForSelectedMeasure = getDataForMeasures(appState, appState.selectedMeasure!)

        return (
            <div
                className={classNames(
                    s.CollapsibleContentBoard,
                    {
                        [s.expanded]: measuresInDetailExpanded,
                        [s.measuredChangedUpwards]: dataForSelectedMeasure.changedUpwards,
                        [s.headerIsSticky]: headerIsSticky,
                        [s.headerContainerVisible]: appState.measureSelectorContainerVisible,
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
                        {appState.selectedMeasure}
                    </div>

                    <div
                        className={s.caret}
                    >
                        <img 
                            src={PROTOIMG_selectorCaret}
                        />

                    </div>

                    <div
                        className={s.measureValueContainer}
                    >
                        <div
                            className={s.measureValue}
                        >
                            {dataForSelectedMeasure.value}
                        </div>

                        <div
                            className={s.measureValueChange}
                        >
                            {dataForSelectedMeasure.valueChange}
                        </div>

                        <div
                            className={s.measurePercentChange}
                        >
                            {dataForSelectedMeasure.percentChange}
                        </div>
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
