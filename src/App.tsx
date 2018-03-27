import * as React from 'react'
import { hot } from 'react-hot-loader'
import {
      Button,
      Alert,
      CollapseButton,
      Selector,
      CollapsibleContentModule,
      KpiTile,
      CollapsibleContentBoard,
      Sidebar,
      DataView,
} from './components/'
import * as s from './App.css'
import { MeasureName, FiltersSet } from './sharedTypes'

interface Props {}

export interface AppState {
     
      // FILTERS SELECTION AND RELATED VIEW-LOGIC
      selectedFilters?: FiltersSet,
      displayedFilters?: FiltersSet,
      dataViewNeedsUpdating?: boolean,

      // SELECTED MEASURE 
      selectedMeasure?: MeasureName,

      // DEFINES WHICH CONTENT BOARDS ARE EXPANDED
      measuresSummaryExpanded?: boolean,
      measuresInDetailExpanded?: boolean,
      KPITreesExpanded?: boolean,

      // DEFINES WHICH CONTENT MODULES ARE EXPANDED
      trendGraphExpanded?: boolean,
      splitBySubcategoriesExpanded?: boolean,
      splitByStoreFormatsExpanded?: boolean,
      splitByCustomerSegmentsExpanded?: boolean,
      splitByRegionsExpanded?: boolean,
      
      // MEASURE SELECTOR VISIBLE
      measureSelectorContainerVisible?: boolean,
}

const initialState: AppState = {
      selectedFilters: {
            duration: '4 weeks',
            dates: '25 Dec 2017 - 21 Jan 2018',
            comparison: 'vs. previous 4 weeks',
            subcategory: 'All product groups',
            storeFormat: 'All store formats',
            customerSegment: 'All customer segments',
            region: 'All regions',
      },
      displayedFilters: {
            duration: '4 weeks',
            dates: '25 Dec 2017 - 21 Jan 2018',
            comparison: 'vs. previous 4 weeks',
            subcategory: 'All product groups',
            storeFormat: 'All store formats',
            customerSegment: 'All customer segments',
            region: 'All regions'
      },
      dataViewNeedsUpdating: false,

      selectedMeasure: 'Sales value',

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
            
                  selectedMeasure,
            
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
                        {/* <Sidebar 
                              appState={this.state}
                              // tslint:disable-next-line:jsx-no-bind
                              setAppState={this.setState.bind(this)}
                        /> */}

                        <DataView 
                              appState={this.state}
                              // tslint:disable-next-line:jsx-no-bind
                              setAppState={this.setState.bind(this)}
                        />
                  </div>
            )
      }
}

export default hot(module)(App)
