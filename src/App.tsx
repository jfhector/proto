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
import { MeasureName, Duration, Comparison, Subcategory, StoreFormat, CustomerSegment, Region, FiltersSet } from './sharedTypes'

interface Props {}

export interface AppState {
     
      // FILTERS SELECTION AND RELATED VIEW-LOGIC
      selectedFilters: FiltersSet,
      displayedFilters: FiltersSet,
      dataViewNeedsUpdating: boolean,

      // SELECTED MEASURE 
      selectedKpiTile: MeasureName,

      // DEFINES WHICH CONTENT BOARDS ARE EXPANDED
      measuresSummaryExpanded: boolean,
      measuresInDetailExpanded: boolean,
      KPITreesExpanded: boolean,

      // DEFINES WHICH CONTENT MODULES ARE EXPANDED
      trendGraphExpanded: boolean,
      splitBySubcategoriesExpanded: boolean,
      splitByStoreFormatsExpanded: boolean,
      splitByCustomerSegmentsExpanded: boolean,
      splitByRegionsExpanded: boolean,
      
      // MEASURE SELECTOR VISIBLE
      measureSelectorContainerVisible: boolean,
}

const initialState: AppState = {
      selectedFilters: {
            duration: '4 weeks',
            dates: '25 Dec 2017 - 21 Jan 2018',
            comparison: 'vs. last year',
            subcategory: 'All product groups',
            storeFormat: 'All store formats',
            customerSegment: 'All customer segments',
            region: 'All regions',
      },
      displayedFilters: {
            duration: '4 weeks',
            dates: '25 Dec 2017 - 21 Jan 2018',
            comparison: 'vs. last year',
            subcategory: 'All product groups',
            region: 'All regions',                  
            storeFormat: 'All store formats',
            customerSegment: 'All customer segments',
      },
      dataViewNeedsUpdating: false,

      selectedKpiTile: 'Sales value',

      measuresSummaryExpanded: true,
      measuresInDetailExpanded: true,
      KPITreesExpanded: false,

      trendGraphExpanded: false,
      splitBySubcategoriesExpanded: false,
      splitByStoreFormatsExpanded: false,
      splitByCustomerSegmentsExpanded: false,
      splitByRegionsExpanded: false,
      
      measureSelectorContainerVisible: false,
}

class App extends React.Component<Props, AppState> {
      constructor(props: Props) {
            super(props)
            this.state = initialState
      }

      render() {
            const {
                  selectedFilters,
                  displayedFilters,
                  dataViewNeedsUpdating,
            
                  selectedKpiTile,
            
                  measuresSummaryExpanded,
                  measuresInDetailExpanded,
                  KPITreesExpanded,
            
                  trendGraphExpanded,
                  splitBySubcategoriesExpanded,
                  splitByStoreFormatsExpanded,
                  splitByCustomerSegmentsExpanded,
                  splitByRegionsExpanded,
                  
                  measureSelectorContainerVisible,
            } = this.state

            return (
                  <div className={s.App}>
                        <Alert
                              visible
                              typeOption='danger'
                        >
                              Hello you!!!
                        </Alert>

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
                                          measure='Basket penetration'
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
                                          measure='Sales units'
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
