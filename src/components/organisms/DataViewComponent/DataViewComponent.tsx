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
      setAppState: typeof App.prototype.setState
      actions: typeof App.prototype.actions     
}

export class DataViewComponent extends React.Component<Props, {}> {
      refToMeasureInDetailCollapsibleContentBoard: CollapsibleContentBoard      

      render() {
            const {
                  appState,
                  setAppState,
                  actions,
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
                              handleCollapseButtonClick={actions.toggleMeasuresSummaryExpanded}
                        >
                              <div
                                    className={s.KpiTilesContainer}
                              >
                                    <KpiTile 
                                          measure='Sales value'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Sales value'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Sales units'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Sales units'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Customers'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Customers'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Spend per customer'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Spend per customer'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Retailer visits'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Retailer visits'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Spend per visit'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Spend per visit'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Units per visit'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Units per visit'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Basket penetration'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Basket penetration'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Frequency of purchase'
                                          appState={appState}
                                          selected={appState.selectedMeasure === 'Frequency of purchase'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedMeasure: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />
                              </div>
                        </CollapsibleContentBoard>

                        <CollapsibleContentBoard
                              title='KPI tree'
                              expanded={appState.KPITreesExpanded}
                              handleCollapseButtonClick={actions.toggleKPITreesExpanded}
                        >
                              {appState.KPITreesExpanded &&
                                    <div
                                          className={s.kpiTreesSubtitle}
                                    >
                                          {`${displayedFilters.duration} • ${displayedFilters.dates} ${displayedFilters.comparison}`}
                                          <br/>
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
                              handleCollapseButtonClick={actions.toggleMeasureInDetailExpanded}
                              rightNode={
                                    <Selector
                                          optionsArray={measureOptions}
                                          value={appState.selectedMeasure}
                                          handleSelectorChange={
                                                (newlySelectedMeasure: MeasureName) => {
                                                      setAppState({
                                                            selectedMeasure: newlySelectedMeasure
                                                      })

                                                      this.refToMeasureInDetailCollapsibleContentBoard.scrollRightNodeContainerIntoView({
                                                            behavior: 'smooth',
                                                            block: 'start',
                                                            inline: 'nearest',
                                                      })
                                                }
                                          }
                                    />
                              }
                        >
                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Trend`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.trendGraphExpanded}
                                    handleCollapseButtonClick={actions.toggleTrendGraphExpanded}
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
                                    expanded={appState.splitBySubcategoriesExpanded}
                                    handleCollapseButtonClick={actions.toggleSplitBySubcategoriesExpanded}
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
                                    expanded={appState.splitByRegionsExpanded}
                                    handleCollapseButtonClick={actions.toggleSplitByRegionExpanded}
                              >
                                    <img 
                                          src={PROTOIMG_table_regions_salesValue} 
                                    />
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Split by store format`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.splitByStoreFormatsExpanded}
                                    handleCollapseButtonClick={actions.toggleSplitByStoreFormatExpanded}
                              >
                                    <img 
                                          src={PROTOIMG_table_storeFormats_salesValue} 
                                    />
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Split by customer segment`}
                                    displayedFilters={displayedFilters}
                                    expanded={appState.splitByCustomerSegmentsExpanded}
                                    handleCollapseButtonClick={actions.toggleSplitByCustomerSegmentExpanded}
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
