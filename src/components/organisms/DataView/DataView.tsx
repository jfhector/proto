
import * as React from 'react'
import { AppState } from '../../../App'
import * as s from './DataView.css'
import { Button, Alert, CollapsibleContentBoard, KpiTile, Selector, CollapsibleContentModule } from '../..'
import { measureOptions } from '../../../data';
import { MeasureName } from '../../../sharedTypes';

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
      appState: AppState,
      setAppState<K extends keyof AppState>(
            state: ((prevState: Readonly<AppState>, props: Props) => (Pick<AppState, K> | AppState | null)) | (Pick<AppState, K> | AppState | null),
            callback?: () => void
      ): void,
}

export class DataView extends React.Component<Props, {}> {
      render() {
            const {
                  appState,
                  setAppState
            } = this.props

            const {
                  displayedFilters,
                  selectedMeasure,
            } = appState

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

                        <Alert
                              typeOption='warning'
                              visible={appState.dataViewNeedsUpdating}
                        >
                              <b>This view doesn&apos;t reflect your new selection yet.&nbsp;</b> Click <span className={s.alertLink}>&apos;Update view&apos;&nbsp;</span> to refresh this view.
                        </Alert>

                        <CollapsibleContentBoard
                              title='Measures summary'
                              expanded={appState.measuresSummaryExpanded}
                              handleCollapseButtonClick={
                                    () => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      measuresSummaryExpanded: !prevState.measuresSummaryExpanded,
                                                })
                                          )
                                    }
                              }
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
                              title='Kpi trees'
                              expanded={appState.KPITreesExpanded}
                              handleCollapseButtonClick={
                                    () => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      KPITreesExpanded: !prevState.KPITreesExpanded
                                                })
                                          )
                                    }
                              }
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
                              title='Measure in detail'
                              rightNodeIsSticky
                              rightNodeIsHighlighted={appState.measureSelectorContainerVisible}
                              expanded={appState.measuresInDetailExpanded}
                              handleCollapseButtonClick={
                                    () => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      measuresInDetailExpanded: !prevState.measuresInDetailExpanded,
                                                })
                                          )
                                    }
                              }
                              rightNode={
                                    <Selector
                                          optionsArray={measureOptions}
                                          value={appState.selectedMeasure}
                                          handleSelectorChange={
                                                (newlySelectedMeasure: MeasureName) => {
                                                      setAppState({
                                                            selectedMeasure: newlySelectedMeasure
                                                      })
                                                }
                                          }
                                    />
                              }
                        >
                              <CollapsibleContentModule
                                    title={`${selectedMeasure} • Trend`}
                                    displayedFilters={appState.displayedFilters}
                              >
                                    Caca
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