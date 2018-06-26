import * as React from 'react'
import App from '../../../App'
import * as s from './DataViewComponent.css'
import { Button, Alert, CollapsibleContentBoard, KpiTile, Selector, CollapsibleContentModule, DataSubtitle } from '../..'
import { measureOptions, kpisDataForAllMeasuresFor } from '../../../data'
import { AppState, Actions, RefAssignmentFunctions, MeasureOption } from '../../../sharedTypes'
import { PROTOIMG_graph_salesValue, PROTOIMG_graph_customers, PROTOIMG_graph_spendPerCustomer, PROTOIMG_graph_spendPerVisit, PROTOIMG_table_subcategories_customers, PROTOIMG_table_subcategories_salesValue, PROTOIMG_table_subcategories_spendPerCustomer, PROTOIMG_table_subcategories_spendPerVisit, PROTOIMG_table_customerTypes_salesValue, PROTOIMG_table_regions_salesValue, PROTOIMG_table_storeFormats_salesValue, PROTOIMG_kpiTree } from './../../../assets/'

interface Props {
    // Connecting the component
    appState: AppState
    actions: Actions
    refAssignmentFunctions: RefAssignmentFunctions
}

export class DataViewComponent extends React.Component<Props, {}> {

    render() {
        const {
            appState,
            actions,
            refAssignmentFunctions,
        } = this.props

        // TYPE GUARDS
        if (typeof appState.displayedFilters === 'undefined') { throw new Error() }
        if (typeof appState.dataViewNeedsUpdating === 'undefined') { throw new Error() }
        if (typeof appState.selectedMeasure === 'undefined') { throw new Error() }

        return (
            <div
                className={s.DataView}
            >
                <div
                    className={s.viewTitleRow}
                >
                    <div
                        className={s.viewTitle}
                    >
                        Untitled view
                    </div>

                    <div
                        className={s.viewTitleButtonsRow}
                    >
                        <Button
                            typeOption='secondary'
                        >
                            Download data
                        </Button>

                        <Button
                        >
                            Save view
                        </Button>
                    </div>
                </div>

                <div
                    className={s.alertContainer}
                >
                    <Alert
                        typeOption='warning'
                        visible={appState.dataViewNeedsUpdating}
                        handleClick={actions.updateView}
                        dismissable
                    >
                        <b>This view doesn&apos;t reflect your new selection yet.&nbsp;</b> Click <span className={s.alertLink}>&apos;Update view&apos;&nbsp;</span> to refresh this view.
                    </Alert>
                </div>

                <CollapsibleContentBoard
                    title='Performance overview'
                    expanded={appState.expanded.measuresSummaryBoard}
                    handleCollapseButtonClick={actions.toggleExpansion.measuresSummary}
                >
                    <div
                        className={s.KpiTilesContainer}
                    >
                        {
                            Object.keys(measureOptions).map((measureOption: MeasureOption) =>
                                <KpiTile
                                    measure={measureOption}
                                    kpisData={kpisDataForAllMeasuresFor(appState)[measureOption]}
                                    selected={appState.selectedMeasure === measureOption}
                                    handleKpiTileClick={actions.changeSelected.measure}
                                    key={measureOption}
                                />
                            )
                        }
                    </div>
                </CollapsibleContentBoard>

                <CollapsibleContentBoard
                    title='KPI tree'
                    expanded={appState.expanded.kpisTreesBoard}
                    handleCollapseButtonClick={actions.toggleExpansion.kpisTrees}
                >
                    <DataSubtitle
                            selectedMeasure={appState.selectedMeasure}
                            displayedFilters={appState.displayedFilters}
                    />
                    <img
                        src={PROTOIMG_kpiTree}
                    />
                </CollapsibleContentBoard>

                <CollapsibleContentBoard
                    title='Measure in detail'
                    headerIsSticky
                    expanded={appState.expanded.measuresInDetailBoard}
                    headerHighlighted={appState.measureInDetailBoardHeaderVisible}
                    handleCollapseButtonClick={actions.toggleExpansion.measureInDetail}
                    refAssignmentFunctionforHeaderContainingDiv={refAssignmentFunctions.forMeasureInDetailBoardHeaderContainingDiv}
                    rightNode={
                        <> 
                            <span
                                className={s.measureInDetailBoardRightNodeLabel}
                            >
                                Selected measure:
                            </span>
                            <Selector
                                optionsArray={Object.keys(measureOptions)}
                                value={`${appState.selectedMeasure}`}
                                handleSelectorChange={actions.changeSelected.measure}
                            />
                        </>
                    }
                >
                    <CollapsibleContentModule
                        title='Trend'
                        expanded={appState.expanded.trendGraphModule}
                        handleCollapseButtonClick={actions.toggleExpansion.trendGraph}
                    >
                        <DataSubtitle
                            selectedMeasure={appState.selectedMeasure}
                            displayedFilters={appState.displayedFilters}
                        />
                        <img
                            src={
                                (function () {
                                    switch (appState.selectedMeasure) {
                                        case 'Sales value':
                                        case 'Basket penetration':
                                            return PROTOIMG_graph_salesValue
                                        case 'Spend per customer':
                                        case 'Frequency of purchase':
                                        case 'Sales units':
                                            return PROTOIMG_graph_spendPerCustomer
                                        case 'Customers':
                                        case 'Retailer visits':
                                            return PROTOIMG_graph_customers
                                        case 'Spend per visit':
                                        case 'Units per visit':
                                            return PROTOIMG_graph_spendPerVisit
                                        default:
                                            const _exhaustiveCheck: never = appState.selectedMeasure
                                    }
                                })()
                            }
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title={`Top 10 movers in ${appState.displayedFilters.subcategory}`}
                        expanded={appState.expanded.splitBySubcategoryModule}
                        handleCollapseButtonClick={actions.toggleExpansion.splitBySubcategory}
                    >
                        <DataSubtitle
                            selectedMeasure={appState.selectedMeasure}
                            displayedFilters={appState.displayedFilters}
                        />
                        <img
                            src={
                                (function () {
                                    switch (appState.selectedMeasure) {
                                        case 'Sales value':
                                        case 'Basket penetration':
                                            return PROTOIMG_table_subcategories_salesValue
                                        case 'Spend per customer':
                                        case 'Frequency of purchase':
                                        case 'Sales units':
                                            return PROTOIMG_table_subcategories_spendPerCustomer
                                        case 'Customers':
                                        case 'Retailer visits':
                                            return PROTOIMG_table_subcategories_customers
                                        case 'Spend per visit':
                                        case 'Units per visit':
                                            return PROTOIMG_table_subcategories_spendPerVisit
                                        default:
                                            const _exhaustiveCheck: never = appState.selectedMeasure
                                    }
                                })()
                            }
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title='Split by region'
                        expanded={appState.expanded.splitByRegionModule}
                        handleCollapseButtonClick={actions.toggleExpansion.splitByRegion}
                    >
                        <DataSubtitle
                            selectedMeasure={appState.selectedMeasure}
                            displayedFilters={appState.displayedFilters}
                        />
                        <img
                            src={PROTOIMG_table_regions_salesValue}
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title='Split by store format'
                        expanded={appState.expanded.splitByStoreFormatModule}
                        handleCollapseButtonClick={actions.toggleExpansion.splitByStoreFormat}
                    >
                        <DataSubtitle
                            selectedMeasure={appState.selectedMeasure}
                            displayedFilters={appState.displayedFilters}
                        />
                        <img
                            src={PROTOIMG_table_storeFormats_salesValue}
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title='Split by customer segment'
                        expanded={appState.expanded.splitByCustomerSegmentModule}
                        handleCollapseButtonClick={actions.toggleExpansion.splitByCustomerSegment}
                    >
                        <DataSubtitle
                            selectedMeasure={appState.selectedMeasure}
                            displayedFilters={appState.displayedFilters}
                        />
                        <img
                            src={PROTOIMG_table_customerTypes_salesValue}
                        />
                    </CollapsibleContentModule>
                </CollapsibleContentBoard>
            </div>
        )
    }
}
