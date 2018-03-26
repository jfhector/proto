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
} from './components/'
import * as s from './App.css'
import { MeasureName, FiltersSet } from './sharedTypes'

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
                        <Sidebar 
                              appState={this.state}
                              setAppState={this.setState}
                        />
                  </div>
            )
      }
}

export default hot(module)(App)
