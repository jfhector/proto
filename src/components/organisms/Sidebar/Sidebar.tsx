import React = require('react')
import App, { AppState } from '../../../App'
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'
import { DurationOption, DateOption, ComparisonOption, MedicineSubcategoryName, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
import { durationOptions, getDatesOptions, getComparisonOptions, medicineSubcategories, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

interface Props {
      appState: AppState
      setAppState: typeof App.prototype.setState
      actions: typeof App.prototype.actions
}

export class Sidebar extends React.Component<Props, {}> {
      render() {
            const {
                  appState,
                  setAppState,
                  actions,
            } = this.props

            const {
                  selectedFilters,
                  dataViewNeedsUpdating,
            } = appState

            // TYPE GUARDS
            if ( typeof selectedFilters === 'undefined' ) { throw new Error() }

            return (
                  <div
                        className={s.Sidebar}
                  >
                        <div
                              className={s.title}
                        >
                              Configure view
                        </div>

                        <div
                              className={s.selectorGroupContainer}
                        >
                              <div
                                    className={s.selectorGroupTitle}
                              >
                                    Analysis period
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={durationOptions}
                                          value={selectedFilters.duration}
                                          handleSelectorChange={
                                                (newlySelectedDuration: DurationOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        duration: newlySelectedDuration,
                                                                        comparison: getComparisonOptions(newlySelectedDuration)[0]
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={getDatesOptions(selectedFilters.duration)}
                                          value={selectedFilters.dates}
                                          handleSelectorChange={
                                                (newlySelectedDates: DateOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        dates: newlySelectedDates
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={getComparisonOptions(selectedFilters.duration)}
                                          value={selectedFilters.comparison}
                                          handleSelectorChange={
                                                (newlySelectedComparison: ComparisonOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        comparison: newlySelectedComparison,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>
                        </div>

                        <div
                              className={s.selectorGroupContainer}
                        >
                              <div
                                    className={s.selectorGroupTitle}
                              >
                                          Data source
                              </div>

                              <form
                                    className={s.radiosAndLabels}
                              >
                                          <input
                                                type='radio'
                                                id='dataSourceChoice1'
                                                name='dataSource'
                                                value='All data'
                                                defaultChecked
                                          />
                                          
                                          <label
                                                htmlFor='dataSourceChoice1'
                                          >
                                                All data
                                          </label>

                                          <input
                                                type='radio'
                                                id='dataSourceChoice2'
                                                name='dataSource'
                                                value='Loyalty Card'
                                          />
                                          
                                          <label
                                                htmlFor='dataSourceChoice2'
                                          >
                                                Loyalty Card (LC)
                                          </label>
                              </form>
                        </div>

                        <div
                              className={s.selectorGroupContainer}
                        >
                              <div
                                    className={s.selectorGroupTitle}
                              >
                                          Data filters
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={Object.keys(medicineSubcategories)}
                                          value={selectedFilters.subcategory}
                                          handleSelectorChange={
                                                (newlySelectedSubcategory: MedicineSubcategoryName) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        subcategory: newlySelectedSubcategory,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={regionOptions}
                                          value={selectedFilters.region}
                                          handleSelectorChange={
                                                (newlySelectedRegion: RegionOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        region: newlySelectedRegion,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={storeFormatOptions}
                                          value={selectedFilters.storeFormat}
                                          handleSelectorChange={
                                                (newlySelectedStoreFormat: StoreFormatOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        storeFormat: newlySelectedStoreFormat,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={customerSegmentOptions}
                                          value={selectedFilters.customerSegment}
                                          handleSelectorChange={
                                                (newlySelectedCustomerSegment: CustomerSegmentOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        customerSegment: newlySelectedCustomerSegment,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            } as AppState)
                                                      )
                                                }
                                          }
                                    />
                              </div>
                        </div>

                        <Button
                              fullWidth
                              disabled={!dataViewNeedsUpdating}
                              handleButtonClick={actions.updateView}
                        >
                                    Update view
                        </Button>
                  </div>
            )
      }
}
