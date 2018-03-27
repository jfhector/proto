
import * as React from 'react'
import { AppState } from '../../../App'
import * as s from './DataView.css'
import { Button, Alert, CollapsibleContentBoard, KpiTile } from '../..'

// import PROTOIMG_graph_salesValue from '../../assets/PROTOIMG_graph_salesValue.png'
// import PROTOIMG_graph_customers from '../../assets/PROTOIMG_graph_customers.png'
// import PROTOIMG_graph_spendPerCustomer from '../../assets/PROTOIMG_graph_spendPerCustomer.png'
// import PROTOIMG_graph_spendPerVisit from '../../assets/PROTOIMG_graph_spendPerVisit.png'

// import PROTOIMG_table_subcategories_customers from '../../assets/PROTOIMG_table_subcategories_customers.png'
// import PROTOIMG_table_subcategories_salesValue from '../../assets/PROTOIMG_table_subcategories_salesValue.png'
// import PROTOIMG_table_subcategories_spendPerCustomer from '../../assets/PROTOIMG_table_subcategories_spendPerCustomer.png'
// import PROTOIMG_table_subcategories_spendPerVisit from '../../assets/PROTOIMG_table_subcategories_spendPerVisit.png'

// import PROTOIMG_table_customerTypes_salesValue from '../../assets/PROTOIMG_table_customerTypes_salesValue.png'
// import PROTOIMG_table_regions_salesValue from '../../assets/PROTOIMG_table_regions_salesValue.png'
// import PROTOIMG_table_storeFormats_salesValue from '../../assets/PROTOIMG_table_storeFormats_salesValue.png'

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
                  displayedFilters
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
                                          selected={appState.selectedKpiTile === 'Sales value'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Sales units'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Sales units'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Customers'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Customers'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Spend per customer'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Spend per customer'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Retailer visits'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Retailer visits'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Spend per visit'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Spend per visit'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Units per visit'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Units per visit'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Basket penetration'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Basket penetration'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
                                                      })
                                                }
                                          }
                                    />

                                    <KpiTile 
                                          measure='Frequency of purchase'
                                          appState={appState}
                                          selected={appState.selectedKpiTile === 'Frequency of purchase'}
                                          handleKpiTileClick={
                                                (nameOfAssociatedMeasure) => {
                                                      setAppState({
                                                            selectedKpiTile: nameOfAssociatedMeasure
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
                  </div>
            )
      }
}
