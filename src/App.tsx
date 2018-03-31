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
      DataViewComponent,
} from './components/'
import * as s from './App.css'
import { MeasureName, FiltersSet } from './sharedTypes'

const PROTOIMG_nav_header = require('./assets/PROTOIMG_nav_header.png')
const PROTOIMG_nav_tabs = require('./assets/PROTOIMG_nav_tabs.png')
const PROTOIMG_nav_footer = require('./assets/PROTOIMG_nav_footer.png')

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
      setAppState: typeof App.prototype.setState
      refToDataViewComponent: DataViewComponent

      constructor(props: Props) {
            super(props)
            this.state = initialState

            this.setAppState = this.setState.bind(this)
      }

      componentDidMount() {
            window.addEventListener(
                  'scroll',
                  this.conditionallySetMeasureSelectorContainerVisibleStateBasedOnScrollY
            )
      }

      componentWillUnmount() {
            window.removeEventListener(
                  'scroll', 
                  this.conditionallySetMeasureSelectorContainerVisibleStateBasedOnScrollY
            )
      }

      conditionallySetMeasureSelectorContainerVisibleStateBasedOnScrollY = () => {
            let measureInDetailContentBoardRightNodeContainerBoundingClientRect = this.refToDataViewComponent.refToMeasureInDetailCollapsibleContentBoard.refToRightNodeContainer.getBoundingClientRect() as DOMRect

            this.setState({
                  measureSelectorContainerVisible: (measureInDetailContentBoardRightNodeContainerBoundingClientRect.top > 0) ? false : true,
            })
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
                  <div>
                        <header
                              className={s.headerContainer}
                        >
                              <img src={PROTOIMG_nav_header} />
                        </header>

                        <header
                              className={s.tabsBarContainer}
                        >
                              <img src={PROTOIMG_nav_tabs} />
                        </header>

                        <main
                              className={s.main}
                        >
                              <div
                                    className={s.sideBarContainer}
                              >
                                    <Sidebar 
                                          appState={this.state}
                                          setAppState={this.setAppState}
                                    />
                              </div>

                              <DataViewComponent 
                                    appState={this.state}
                                    setAppState={this.setAppState}
                                    ref={
                                          (component: DataViewComponent) => {
                                                this.refToDataViewComponent = component
                                          }
                                    }
                              />
                        </main>

                        <footer
                              className={s.footer}
                        >
                              <img src={PROTOIMG_nav_footer} />
                        </footer>

                  </div>
            )
      }
}

export default hot(module)(App)
