import * as React from 'react'
import { hot } from 'react-hot-loader'
import * as s from './App.css'
import { Sidebar, DataViewComponent } from './components/'
import { AppState, MeasureName, DateOption, ComparisonOption, MedicineSubcategoryName, RegionOption, StoreFormatOption, CustomerSegmentOption, DurationOption } from './sharedTypes'
import { getComparisonOptions } from './data'
import { AssetsLoader, PROTOIMG_nav_header, PROTOIMG_nav_tabs, PROTOIMG_nav_footer } from './assets'

interface Props {}

class App extends React.Component<Props, AppState> {

    // State

    state: AppState = {
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
        splitBySubcategoryExpanded: false,
        splitByStoreFormatExpanded: false,
        splitByCustomerSegmentExpanded: false,
        splitByRegionExpanded: false,

        measureInDetailBoardHeaderVisible: false,
    }

    // Refs

    refToMeasureInDetailBoardHeaderContainingDiv: HTMLDivElement

    refAssignmentFunctions = {
        forMeasureInDetailBoardHeaderContainingDiv: (element: HTMLDivElement) => {
            this.refToMeasureInDetailBoardHeaderContainingDiv = element
        }
    }

    // Actions

    actions = {
        updateView: () => {
            this.setState(
                (prevState: AppState) => ({
                    displayedFilters: prevState.selectedFilters,
                    dataViewNeedsUpdating: false,
                })
            )
        },
        conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY: () => {
            this.setState({
                  measureInDetailBoardHeaderVisible: (
                    (this.refToMeasureInDetailBoardHeaderContainingDiv.getBoundingClientRect() as DOMRect).top > 0
                  ) ? false : true,
            })
        },
        selectionChanges: {
            changeSelectedDuration: (newlySelectedDuration: DurationOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            duration: newlySelectedDuration,
                            comparison: getComparisonOptions(newlySelectedDuration)[0]
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedDates: (newlySelectedDates: DateOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            dates: newlySelectedDates
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedComparison: (newlySelectedComparison: ComparisonOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            comparison: newlySelectedComparison,
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedSubcategory: (newlySelectedSubcategory: MedicineSubcategoryName) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            subcategory: newlySelectedSubcategory,
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedRegion: (newlySelectedRegion: RegionOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            region: newlySelectedRegion,
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedStoreFormat: (newlySelectedStoreFormat: StoreFormatOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            storeFormat: newlySelectedStoreFormat,
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedCustomerSegment: (newlySelectedCustomerSegment: CustomerSegmentOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            customerSegment: newlySelectedCustomerSegment,
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            changeSelectedMeasure: (newlySelectedMeasure: MeasureName) => {
                this.setState({
                    selectedMeasure: newlySelectedMeasure
                })
            },
        },
        expansionToggles: {
            toggleMeasuresSummaryExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        measuresSummaryExpanded: !prevState.measuresSummaryExpanded,
                    })
                )
            },
            toggleKPITreesExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        KPITreesExpanded: !prevState.KPITreesExpanded
                    })
                )
            },
            toggleMeasureInDetailExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        measuresInDetailExpanded: !prevState.measuresInDetailExpanded,
                    })
                )
            },
            toggleTrendGraphExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        trendGraphExpanded: !prevState.trendGraphExpanded
                    })
                )
            },
            toggleSplitBySubcategoryExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        splitBySubcategoryExpanded: !prevState.splitBySubcategoryExpanded
                    })
                )
            },
            toggleSplitByRegionExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        splitByRegionExpanded: !prevState.splitByRegionExpanded
                    })
                )
            },
            toggleSplitByStoreFormatExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        splitByStoreFormatExpanded: !prevState.splitByStoreFormatExpanded
                    })
                )
            },
            toggleSplitByCustomerSegmentExpanded: () => {
                this.setState(
                    (prevState: AppState) => ({
                        splitByCustomerSegmentExpanded: !prevState.splitByCustomerSegmentExpanded
                    })
                )
            },
        },
    }

    // Event listeners

    componentDidMount() {
        window.addEventListener(
            'scroll',
            this.actions.conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY
        )
    }

    componentWillUnmount() {
        window.removeEventListener(
            'scroll',
            this.actions.conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY
        )
    }

    // Render

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
            splitBySubcategoryExpanded,
            splitByStoreFormatExpanded,
            splitByCustomerSegmentExpanded,
            splitByRegionExpanded,

            measureInDetailBoardHeaderVisible,
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
                            actions={this.actions}
                        />
                    </div>

                    <DataViewComponent
                        appState={this.state}
                        actions={this.actions}
                        refAssignmentFunctions={this.refAssignmentFunctions}
                    />
                </main>

                <footer
                    className={s.footer}
                >
                    <img src={PROTOIMG_nav_footer} />
                </footer>

                <AssetsLoader />
            </div>
        )
    }
}

export default hot(module)(App)
