import React = require('react')
import { AppState } from '../../../App'
import classNames = require('classnames')
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'
import { durationOptions, getDatesOptions, getComparisonOptions, medicineSubcategories, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

interface Props {
      appState: AppState,
      handleUpdateViewButtonClick?: React.MouseEventHandler<HTMLElement>,
      setAppState<K extends keyof AppState>(
            state: ((prevState: Readonly<AppState>, props: Props) => (Pick<AppState, K> | AppState | null)) | (Pick<AppState, K> | AppState | null),
            callback?: () => void
      ): void,
}

export class Sidebar extends React.Component<Props, {}> {
      render() {
            const {
                  appState,
                  handleUpdateViewButtonClick,
                  setAppState,
            } = this.props

            return (
                  <div
                        className={classNames(
                              s.Sidebar
                        )}
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
                                          value={appState.selectedFilters.duration}
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={getDatesOptions(appState.selectedFilters.duration)}
                                          value={appState.selectedFilters.dates}
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={getComparisonOptions(appState.selectedFilters.duration)}
                                          value={appState.selectedFilters.comparison}
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
                                          value={appState.selectedFilters.subcategory}
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={regionOptions}
                                          value={appState.selectedFilters.region}
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={storeFormatOptions}
                                          value={appState.selectedFilters.storeFormat}
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={customerSegmentOptions}
                                          value={appState.selectedFilters.customerSegment}
                                    />
                              </div>
                        </div>

                        <Button
                              fullWidth
                              disabled={!appState.dataViewNeedsUpdating}
                        >
                                    Update view
                        </Button>
                  </div>
            )
      }
}