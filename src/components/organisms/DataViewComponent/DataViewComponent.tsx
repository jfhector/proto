import * as React from 'react'
import App from '../../../App'
import * as s from './DataViewComponent.css'
import { Button, Alert, CollapsibleContentBoard, KpiTile, Selector, CollapsibleContentModule, DataSubtitle } from '../..'
import { measureOptions, getKpisDataForAllMeasuresFor } from '../../../data'
import { AppState, Actions, MeasureName } from '../../../sharedTypes'
import { PROTOIMG_graph_salesValue, PROTOIMG_graph_customers, PROTOIMG_graph_spendPerCustomer, PROTOIMG_graph_spendPerVisit, PROTOIMG_table_subcategories_customers, PROTOIMG_table_subcategories_salesValue, PROTOIMG_table_subcategories_spendPerCustomer, PROTOIMG_table_subcategories_spendPerVisit, PROTOIMG_table_customerTypes_salesValue, PROTOIMG_table_regions_salesValue, PROTOIMG_table_storeFormats_salesValue, PROTOIMG_kpiTree } from './../../../assets/'

interface Props {
    // Connecting the component
    appState: AppState
    actions: Actions

    refAssignmentFunctions: typeof App.prototype.refAssignmentFunctions             // TODO Type to be refactored
}

export class DataViewComponent extends React.Component<Props, {}> {

    render() {
        const {
            appState,
            actions,
            refAssignmentFunctions,
        } = this.props

        const {
            displayedFilters,
            selectedMeasure,
        } = appState

        const {
            changeSelectedMeasure
        } = actions.selectionChanges

        // TYPE GUARDS
        if (typeof displayedFilters === 'undefined') { throw new Error() }
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
                    expanded={appState.measuresSummaryExpanded}
                    handleCollapseButtonClick={actions.expansionToggles.toggleMeasuresSummaryExpanded}
                >
                    <div
                        className={s.KpiTilesContainer}
                    >
                        <KpiTile
                            measure='Sales value'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Sales value']}
                            selected={appState.selectedMeasure === 'Sales value'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Sales units'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Sales units']}
                            selected={appState.selectedMeasure === 'Sales units'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Customers'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Customers']}
                            selected={appState.selectedMeasure === 'Customers'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Spend per customer'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Spend per customer']}
                            selected={appState.selectedMeasure === 'Spend per customer'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Retailer visits'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Retailer visits']}
                            selected={appState.selectedMeasure === 'Retailer visits'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Spend per visit'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Spend per visit']}
                            selected={appState.selectedMeasure === 'Spend per visit'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Units per visit'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Units per visit']}
                            selected={appState.selectedMeasure === 'Units per visit'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Basket penetration'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Basket penetration']}
                            selected={appState.selectedMeasure === 'Basket penetration'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />

                        <KpiTile
                            measure='Frequency of purchase'
                            kpisData={getKpisDataForAllMeasuresFor(appState)['Frequency of purchase']}
                            selected={appState.selectedMeasure === 'Frequency of purchase'}
                            handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                        />
                    </div>
                </CollapsibleContentBoard>

                <CollapsibleContentBoard
                    title='KPI tree'
                    expanded={appState.KPITreesExpanded}
                    handleCollapseButtonClick={actions.expansionToggles.toggleKPITreesExpanded}
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
                    expanded={appState.measuresInDetailExpanded}
                    headerHighlighted={appState.measureInDetailBoardHeaderVisible}
                    handleCollapseButtonClick={actions.expansionToggles.toggleMeasureInDetailExpanded}
                    refAssignmentFunctionforHeaderContainingDiv={refAssignmentFunctions.forMeasureInDetailBoardHeaderContainingDiv}
                    rightNode={
                        <> 
                            <span
                                className={s.measureInDetailBoardRightNodeLabel}
                            >
                                Selected measure:
                            </span>
                            <Selector
                                optionsArray={measureOptions}
                                value={`${selectedMeasure}`}
                                handleSelectorChange={changeSelectedMeasure}
                            />
                        </>
                    }
                >
                    <CollapsibleContentModule
                        title='Trend'
                        displayedFilters={displayedFilters}
                        expanded={appState.trendGraphExpanded}
                        handleCollapseButtonClick={actions.expansionToggles.toggleTrendGraphExpanded}
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
                        title={`Top 10 movers in ${displayedFilters.subcategory}`}
                        displayedFilters={displayedFilters}
                        expanded={appState.splitBySubcategoryExpanded}
                        handleCollapseButtonClick={actions.expansionToggles.toggleSplitBySubcategoryExpanded}
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
                        displayedFilters={displayedFilters}
                        expanded={appState.splitByRegionExpanded}
                        handleCollapseButtonClick={actions.expansionToggles.toggleSplitByRegionExpanded}
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
                        displayedFilters={displayedFilters}
                        expanded={appState.splitByStoreFormatExpanded}
                        handleCollapseButtonClick={actions.expansionToggles.toggleSplitByStoreFormatExpanded}
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
                        displayedFilters={displayedFilters}
                        expanded={appState.splitByCustomerSegmentExpanded}
                        handleCollapseButtonClick={actions.expansionToggles.toggleSplitByCustomerSegmentExpanded}
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
