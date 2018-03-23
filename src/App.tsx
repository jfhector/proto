import * as React from 'react'
import { hot } from 'react-hot-loader'
import {
      Counter, 
      Button,
      Alert,
      CollapseButton,
      Selector,
      CollapsibleContentModule,
      KpiTile,
      CollapsibleContentBoard,
} from './components/'
import * as s from './App.css'
import { MeasureName } from './sharedTypes'

interface Props {}

export interface AppState {
      selectedSweet: string
}

const initialState: AppState = {
      selectedSweet: 'Quiche'
}

class App extends React.Component<Props, AppState> {
      constructor(props: Props) {
            super(props)
            this.state = initialState
      }

      render() {
            const {
                  selectedSweet
            } = this.state

            return (
                  <div className={s.App}>
                        <Counter 
                              big
                        />

                        <CollapsibleContentBoard 
                              title='Hello!!!'
                              expanded
                              rightNodeIsSticky
                              rightNodeIsHighlighted
                              rightNode={
                                    <Selector 
                                          value='Quiche'
                                          optionsArray={[
                                                'Quiche',
                                                'Bonbon',
                                                'Pizza'
                                          ]}
                                    />
                              }
                        >
                              <CollapsibleContentModule
                                    title='Hello'
                                    expanded
                                    displayedFilters={{
                                          duration: '4 weeks',
                                          dates: '21 Jan 2018 to 24 Feb 2018',
                                          comparison: 'vs. last year',
                                          subcategory: 'DERMATOLOGY',
                                          region: 'North region',
                                          storeFormat: 'All store formats',
                                          customerSegment: 'All customer segments',
                                    }}
                              >
                                    <KpiTile 
                                          measure='Sales value'
                                          appState={this.state}

                                    />

                                    <Button
                                          typeOption='primary'
                                          sizeOption='large'
                                    >
                                          Click me
                                    </Button>
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title='Hello'
                                    expanded
                                    displayedFilters={{
                                          duration: '4 weeks',
                                          dates: '21 Jan 2018 to 24 Feb 2018',
                                          comparison: 'vs. last year',
                                          subcategory: 'DERMATOLOGY',
                                          region: 'North region',
                                          storeFormat: 'All store formats',
                                          customerSegment: 'All customer segments',
                                    }}
                              >
                                    <KpiTile 
                                          measure='Sales value'
                                          appState={this.state}

                                    />

                                    <Button
                                          typeOption='primary'
                                          sizeOption='large'
                                    >
                                          Click me
                                    </Button>
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title='Hello'
                                    expanded
                                    displayedFilters={{
                                          duration: '4 weeks',
                                          dates: '21 Jan 2018 to 24 Feb 2018',
                                          comparison: 'vs. last year',
                                          subcategory: 'DERMATOLOGY',
                                          region: 'North region',
                                          storeFormat: 'All store formats',
                                          customerSegment: 'All customer segments',
                                    }}
                              >
                                    <KpiTile 
                                          measure='Sales value'
                                          appState={this.state}

                                    />

                                    <Button
                                          typeOption='primary'
                                          sizeOption='large'
                                          disabled
                                    >
                                          Click me
                                    </Button>
                              </CollapsibleContentModule>

                              <CollapsibleContentModule
                                    title='Hello'
                                    expanded
                                    displayedFilters={{
                                          duration: '4 weeks',
                                          dates: '21 Jan 2018 to 24 Feb 2018',
                                          comparison: 'vs. last year',
                                          subcategory: 'DERMATOLOGY',
                                          region: 'North region',
                                          storeFormat: 'All store formats',
                                          customerSegment: 'All customer segments',
                                    }}
                              >
                                    <KpiTile 
                                          measure='Sales value'
                                          appState={this.state}

                                    />

                                    <Button
                                          typeOption='primary'
                                          sizeOption='large'
                                    >
                                          Click me
                                    </Button>
                              </CollapsibleContentModule>
                        </CollapsibleContentBoard>

                        <Alert 
                              visible
                              typeOption='warning'
                        >
                              Hello!
                        </Alert>

                  </div>
            )
      }
}

export default hot(module)(App)
