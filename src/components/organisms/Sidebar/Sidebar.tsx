import React = require('react')
import { AppState } from '../../../App'
import classNames = require('classnames')
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'

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
                              className='title'
                        >
                              Configure view
                        </div>

                        <div
                              className={s.selectorGroupTitle}
                        >
                              Analysis period
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
                        </div>

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
                                          className={classNames(
                                                s.labels,
                                                s.labelLeft,
                                          )}
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
                                          className={classNames(
                                                s.labels,
                                                s.labelRight,
                                          )}
                                          htmlFor='dataSourceChoice2'
                                    >
                                          Loyalty Card (LC)
                                    </label>
                        </form>

                        <div
                              className={s.selectorGroupTitle}
                        >
                                    Data filters
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
                        </div>

                        <div
                              className={s.selectorContainer}
                        >
                              <Selector
                                    optionsArray={[
                                          'a',
                                          'b',
                                          'c',
                                    ]}
                                    value='a'
                              />
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