import * as React from 'react'
import { hot } from 'react-hot-loader'
import * as s from './App.css'
import { Sidebar, DataViewComponent } from './components/'
import { AppState, MeasureOption, DateOption, ComparisonOption, MedicineSubcategoryOption, RegionOption, StoreFormatOption, CustomerSegmentOption, DurationOption } from './sharedTypes'
import { comparisonOptionsFor } from './data'
import { AssetsLoader, PROTOIMG_nav_header, PROTOIMG_nav_tabs, PROTOIMG_nav_footer } from './assets'

interface Props {}

class App extends React.Component<Props, AppState> {

    // STATE

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

        expanded: {
            measuresSummaryBoard: true,
            measuresInDetailBoard: true,
            kpisTreesBoard: false,

            trendGraphModule: false,
            splitBySubcategoryModule: false,
            splitByStoreFormatModule: false,
            splitByCustomerSegmentModule: false,
            splitByRegionModule: false,
        },

        measureInDetailBoardHeaderVisible: false,
    }

    // REFS

    refToMeasureInDetailBoardHeaderContainingDiv: HTMLDivElement

    refAssignmentFunctions = {
        forMeasureInDetailBoardHeaderContainingDiv: (element: HTMLDivElement) => {
            this.refToMeasureInDetailBoardHeaderContainingDiv = element
        }
    }

    // ACTIONS

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
        changeSelected: {
            duration: (newlySelectedDuration: DurationOption) => {
                this.setState(
                    (prevState: AppState) => ({
                        ...prevState,
                        selectedFilters: {
                            ...prevState.selectedFilters,
                            duration: newlySelectedDuration,
                            comparison: Object.keys(comparisonOptionsFor(newlySelectedDuration))[0]
                        },
                        dataViewNeedsUpdating: true,
                    } as AppState)
                )
            },
            dates: (newlySelectedDates: DateOption) => {
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
            comparison: (newlySelectedComparison: ComparisonOption) => {
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
            subcategory: (newlySelectedSubcategory: MedicineSubcategoryOption) => {
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
            region: (newlySelectedRegion: RegionOption) => {
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
            storeFormat: (newlySelectedStoreFormat: StoreFormatOption) => {
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
            customerSegment: (newlySelectedCustomerSegment: CustomerSegmentOption) => {
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
            measure: (newlySelectedMeasure: MeasureOption) => {
                this.setState({
                    selectedMeasure: newlySelectedMeasure
                })
            },
        },
        toggleExpansion: {
            measuresSummary: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            measuresSummaryBoard: !prevState.expanded.measuresSummaryBoard,
                        }
                    })
                )
            },
            kpisTrees: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            kpisTreesBoard: !prevState.expanded.kpisTreesBoard
                        }
                    })
                )
            },
            measureInDetail: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            measuresInDetailBoard: !prevState.expanded.measuresInDetailBoard,
                        }
                    })
                )
            },
            trendGraph: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            trendGraphModule: !prevState.expanded.trendGraphModule
                        }
                    })
                )
            },
            splitBySubcategory: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            splitBySubcategoryModule: !prevState.expanded.splitBySubcategoryModule
                        }
                    })
                )
            },
            splitByRegion: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            splitByRegionModule: !prevState.expanded.splitByRegionModule
                        }
                    })
                )
            },
            splitByStoreFormat: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            splitByStoreFormatModule: !prevState.expanded.splitByStoreFormatModule
                        }
                    })
                )
            },
            splitByCustomerSegment: () => {
                this.setState(
                    (prevState: AppState) => ({
                        expanded: {
                            ...prevState.expanded,
                            splitByCustomerSegmentModule: !prevState.expanded.splitByCustomerSegmentModule
                        }
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
