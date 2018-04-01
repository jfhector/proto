import * as React from 'react'
import App, { AppState } from '../../../App'
import * as s from './DataViewComponent.css'
import { Button, Alert, CollapsibleContentBoard, KpiTile, Selector, CollapsibleContentModule } from '../..'
import { measureOptions } from '../../../data'
import { MeasureName } from '../../../sharedTypes'

const PROTOIMG_graph_salesValue = require('../../../assets/PROTOIMG_graph_salesValue.png')
const PROTOIMG_graph_customers = require('../../../assets/PROTOIMG_graph_customers.png')
const PROTOIMG_graph_spendPerCustomer = require('../../../assets/PROTOIMG_graph_spendPerCustomer.png')
const PROTOIMG_graph_spendPerVisit = require('../../../assets/PROTOIMG_graph_spendPerVisit.png')

const PROTOIMG_table_subcategories_customers = require('../../../assets/PROTOIMG_table_subcategories_customers.png')
const PROTOIMG_table_subcategories_salesValue = require('../../../assets/PROTOIMG_table_subcategories_salesValue.png')
const PROTOIMG_table_subcategories_spendPerCustomer = require('../../../assets/PROTOIMG_table_subcategories_spendPerCustomer.png')
const PROTOIMG_table_subcategories_spendPerVisit = require('../../../assets/PROTOIMG_table_subcategories_spendPerVisit.png')

const PROTOIMG_table_customerTypes_salesValue = require('../../../assets/PROTOIMG_table_customerTypes_salesValue.png')
const PROTOIMG_table_regions_salesValue = require('../../../assets/PROTOIMG_table_regions_salesValue.png')
const PROTOIMG_table_storeFormats_salesValue = require('../../../assets/PROTOIMG_table_storeFormats_salesValue.png')

const PROTOIMG_kpiTree = require('./../../../assets/PROTOIMG_kpiTree.png')

interface Props {
      appState: AppState
      actions: typeof App.prototype.actions
      refAssignmentFunctions?: typeof App.prototype.refAssignmentFunctions
}

export class DataViewComponent extends React.Component<Props, {}> {
      refToMeasureInDetailCollapsibleContentBoard: CollapsibleContentBoard      

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
                              title='Measures summary'
                              expanded={appState.measuresSummaryExpanded}
                              handleCollapseButtonClick={actions.expansionToggles.toggleMeasuresSummaryExpanded}
                        >
                              <div
                                    className={s.KpiTilesContainer}
                              >
                                    <KpiTile 
                                          measure='Sales value'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Sales value'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Sales units'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Sales units'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Customers'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Customers'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Spend per customer'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Spend per customer'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Retailer visits'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Retailer visits'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Spend per visit'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Spend per visit'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Units per visit'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Units per visit'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Basket penetration'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Basket penetration'}
                                          handleKpiTileClick={actions.selectionChanges.changeSelectedMeasure}
                                    />

                                    <KpiTile 
                                          measure='Frequency of purchase'
                                          appState={appState}
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
                              {appState.KPITreesExpanded &&
                                    <div
                                          className={s.kpiTreesSubtitle}
                                    >
                                          {`${displayedFilters.duration} • ${displayedFilters.dates} ${displayedFilters.comparison}`} <br/>
                                          {`${displayedFilters.subcategory} • ${displayedFilters.region} • ${displayedFilters.storeFormat} • ${displayedFilters.customerSegment}`}
                                    </div>
                              }

                              <img 
                                    src={PROTOIMG_kpiTree} 
                              />
                        </CollapsibleContentBoard>

                        <CollapsibleContentBoard
                              ref={
                                    (component: CollapsibleContentBoard) => {
                                          this.refToMeasureInDetailCollapsibleContentBoard = component
                                    }
                              }
                              title='Measure in detail'
                              rightNodeIsSticky
                              rightNodeIsHighlighted={appState.measureSelectorContainerVisible}
                              expanded={appState.measuresInDetailExpanded}
                              handleCollapseButtonClick={actions.expansionToggles.toggleMeasureInDetailExpanded}
                              refAssignmentFunctions={refAssignmentFunctions}
                              rightNode={
                                    <Selector
                                          optionsArray={measureOptions}
                                          value={appState.selectedMeasure}
                                          handleSelectorChange={actions.selectionChanges.handleFloatingMeasureSelectorChange}
                                    />
                              }
                        >
                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Trend`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.trendGraphExpanded}
                                    handleCollapseButtonClick={actions.expansionToggles.toggleTrendGraphExpanded}
                              >
                                    <img 
                                          src={
                                                (function() {
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
                                    title={`${selectedMeasure} • Top 10 movers in ${displayedFilters.subcategory}`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.splitBySubcategoryExpanded}
                                    handleCollapseButtonClick={actions.expansionToggles.toggleSplitBySubcategoryExpanded}
                              >
                                    <img 
                                          src={
                                                (function() {
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
                                    title={`${selectedMeasure} • Split by region`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.splitByRegionExpanded}
                                    handleCollapseButtonClick={actions.expansionToggles.toggleSplitByRegionExpanded}
                              >
                                    <img 
                                          src={PROTOIMG_table_regions_salesValue} 
                                    />
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Split by store format`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.splitByStoreFormatExpanded}
                                    handleCollapseButtonClick={actions.expansionToggles.toggleSplitByStoreFormatExpanded}
                              >
                                    <img 
                                          src={PROTOIMG_table_storeFormats_salesValue} 
                                    />
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Split by customer segment`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.splitByCustomerSegmentExpanded}
                                    handleCollapseButtonClick={actions.expansionToggles.toggleSplitByCustomerSegmentExpanded}
                              >
                                    <img 
                                          src={PROTOIMG_table_customerTypes_salesValue} 
                                    />
                              </CollapsibleContentModule>
                        </CollapsibleContentBoard>

                        <img src={PROTOIMG_graph_salesValue} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_graph_customers} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_graph_spendPerCustomer} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_graph_spendPerVisit} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />

                        <img src={PROTOIMG_table_subcategories_customers} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_table_subcategories_salesValue} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_table_subcategories_spendPerCustomer} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_table_subcategories_spendPerVisit} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />

                        <img src={PROTOIMG_table_customerTypes_salesValue} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_table_regions_salesValue} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                        <img src={PROTOIMG_table_storeFormats_salesValue} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />

                        <img src={PROTOIMG_kpiTree} style={{'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden'}} />
                  </div>
            )
      }
}
