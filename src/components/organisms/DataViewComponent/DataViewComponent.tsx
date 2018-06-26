import * as React from 'react'
import * as styles from './DataViewComponent.css'
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
        const { props } = this

        return (
            <div
                className={styles.DataView}
            >
                <div
                    className={styles.viewTitleRow}
                >
                    <div
                        className={styles.viewTitle}
                    >
                        Untitled view
                    </div>

                    <div
                        className={styles.viewTitleButtonsRow}
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
                    className={styles.alertContainer}
                >
                    <Alert
                        typeOption='warning'
                        visible={props.appState.dataViewNeedsUpdating}
                        handleClick={props.actions.updateView}
                        dismissable
                    >
                        <b>This view doesn&apos;t reflect your new selection yet.&nbsp;</b> Click <span className={styles.alertLink}>&apos;Update view&apos;&nbsp;</span> to refresh this view.
                    </Alert>
                </div>

                <CollapsibleContentBoard
                    title='Performance overview'
                    expanded={props.appState.expanded.measuresSummaryBoard}
                    handleCollapseButtonClick={props.actions.toggleExpansion.measuresSummary}
                >
                    <div
                        className={styles.KpiTilesContainer}
                    >
                        {
                            Object.keys(measureOptions).map((measureOption: MeasureOption) =>
                                <KpiTile
                                    measure={measureOption}
                                    kpisData={kpisDataForAllMeasuresFor(props.appState)[measureOption]}
                                    selected={props.appState.selectedMeasure === measureOption}
                                    handleKpiTileClick={props.actions.changeSelected.measure}
                                    key={measureOption}
                                />
                            )
                        }
                    </div>
                </CollapsibleContentBoard>

                <CollapsibleContentBoard
                    title='KPI tree'
                    expanded={props.appState.expanded.kpisTreesBoard}
                    handleCollapseButtonClick={props.actions.toggleExpansion.kpisTrees}
                >
                    <DataSubtitle
                            selectedMeasure={props.appState.selectedMeasure}
                            displayedFilters={props.appState.displayedFilters}
                    />
                    <img
                        src={PROTOIMG_kpiTree}
                    />
                </CollapsibleContentBoard>

                <CollapsibleContentBoard
                    title='Measure in detail'
                    headerIsSticky
                    expanded={props.appState.expanded.measuresInDetailBoard}
                    headerHighlighted={props.appState.measureInDetailBoardHeaderVisible}
                    handleCollapseButtonClick={props.actions.toggleExpansion.measureInDetail}
                    refAssignmentFunctionforHeaderContainingDiv={props.refAssignmentFunctions.forMeasureInDetailBoardHeaderContainingDiv}
                    rightNode={
                        <> 
                            <span
                                className={styles.measureInDetailBoardRightNodeLabel}
                            >
                                Selected measure:
                            </span>
                            <Selector
                                optionsArray={Object.keys(measureOptions)}
                                value={`${props.appState.selectedMeasure}`}
                                handleSelectorChange={props.actions.changeSelected.measure}
                            />
                        </>
                    }
                >
                    <CollapsibleContentModule
                        title='Trend'
                        expanded={props.appState.expanded.trendGraphModule}
                        handleCollapseButtonClick={props.actions.toggleExpansion.trendGraph}
                    >
                        <DataSubtitle
                            selectedMeasure={props.appState.selectedMeasure}
                            displayedFilters={props.appState.displayedFilters}
                        />
                        <img
                            src={
                                (function () {
                                    switch (props.appState.selectedMeasure) {
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
                                            const _exhaustiveCheck: never = props.appState.selectedMeasure
                                    }
                                })()
                            }
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title={`Top 10 movers in ${props.appState.displayedFilters.subcategory}`}
                        expanded={props.appState.expanded.splitBySubcategoryModule}
                        handleCollapseButtonClick={props.actions.toggleExpansion.splitBySubcategory}
                    >
                        <DataSubtitle
                            selectedMeasure={props.appState.selectedMeasure}
                            displayedFilters={props.appState.displayedFilters}
                        />
                        <img
                            src={
                                (function () {
                                    switch (props.appState.selectedMeasure) {
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
                                            const _exhaustiveCheck: never = props.appState.selectedMeasure
                                    }
                                })()
                            }
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title='Split by region'
                        expanded={props.appState.expanded.splitByRegionModule}
                        handleCollapseButtonClick={props.actions.toggleExpansion.splitByRegion}
                    >
                        <DataSubtitle
                            selectedMeasure={props.appState.selectedMeasure}
                            displayedFilters={props.appState.displayedFilters}
                        />
                        <img
                            src={PROTOIMG_table_regions_salesValue}
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title='Split by store format'
                        expanded={props.appState.expanded.splitByStoreFormatModule}
                        handleCollapseButtonClick={props.actions.toggleExpansion.splitByStoreFormat}
                    >
                        <DataSubtitle
                            selectedMeasure={props.appState.selectedMeasure}
                            displayedFilters={props.appState.displayedFilters}
                        />
                        <img
                            src={PROTOIMG_table_storeFormats_salesValue}
                        />
                    </CollapsibleContentModule>

                    <CollapsibleContentModule
                        title='Split by customer segment'
                        expanded={props.appState.expanded.splitByCustomerSegmentModule}
                        handleCollapseButtonClick={props.actions.toggleExpansion.splitByCustomerSegment}
                    >
                        <DataSubtitle
                            selectedMeasure={props.appState.selectedMeasure}
                            displayedFilters={props.appState.displayedFilters}
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
