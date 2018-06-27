import * as React from 'react'
import { hot } from 'react-hot-loader'

import * as styles from './App.css'
// import {} from './components/'
import { AppState } from './sharedTypes'
import { AssetsLoader } from './assets'

interface Props {}

class App extends React.Component<Props, AppState> {

    // STATE

    state: AppState = {

        count: 0

        // selectedFilters: {
        //     duration: '4 weeks',
        //     dates: '25 Dec 2017 - 21 Jan 2018',
        //     comparison: 'vs. previous 4 weeks',
        //     subcategory: 'All product groups',
        //     storeFormat: 'All store formats',
        //     customerSegment: 'All customer segments',
        //     region: 'All regions',
        // },
        // displayedFilters: {
        //     duration: '4 weeks',
        //     dates: '25 Dec 2017 - 21 Jan 2018',
        //     comparison: 'vs. previous 4 weeks',
        //     subcategory: 'All product groups',
        //     storeFormat: 'All store formats',
        //     customerSegment: 'All customer segments',
        //     region: 'All regions'
        // },
        // dataViewNeedsUpdating: false,

        // selectedMeasure: 'Sales value',

        // expanded: {
        //     measuresSummaryBoard: true,
        //     measuresInDetailBoard: true,
        //     kpisTreesBoard: false,

        //     trendGraphModule: false,
        //     splitBySubcategoryModule: false,
        //     splitByStoreFormatModule: false,
        //     splitByCustomerSegmentModule: false,
        //     splitByRegionModule: false,
        // },

        // measureInDetailBoardHeaderVisible: false,
    }

    // REFS

    // refToMeasureInDetailBoardHeaderContainingDiv: HTMLDivElement

    refAssignmentFunctions = {
        // forMeasureInDetailBoardHeaderContainingDiv: (element: HTMLDivElement) => {
        //     this.refToMeasureInDetailBoardHeaderContainingDiv = element
        // }
    }

    // ACTIONS

    actions = {
        incrementCount: () => {
            this.setState(
                (prevState: AppState) => ({
                    count: prevState.count + 1
                })
            )
        },
        decrementCount: () => {
            this.setState(
                (prevState: AppState) => ({
                    count: prevState.count - 1
                })
            )
        },

    //     updateView: () => {
    //         this.setState(
    //             (prevState: AppState) => ({
    //                 displayedFilters: prevState.selectedFilters,
    //                 dataViewNeedsUpdating: false,
    //             })
    //         )
    //     },
    //     conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY: () => {
    //         let measureInDetailBoardHeaderContainingDivBoundingClientRect = this.refToMeasureInDetailBoardHeaderContainingDiv.getBoundingClientRect() as DOMRect

    //         this.setState({
    //               measureInDetailBoardHeaderVisible: measureInDetailBoardHeaderContainingDivBoundingClientRect.top > 0 ? false : true,
    //         })
    //     },
    //     changeSelected: {
    //         duration: (newlySelectedDuration: DurationOption) => {
    //             this.setState(
    //                 (prevState: AppState) => ({
    //                     ...prevState,
    //                     selectedFilters: {
    //                         ...prevState.selectedFilters,
    //                         duration: newlySelectedDuration,
    //                     },
    //                     dataViewNeedsUpdating: true,
    //                 } as AppState)
    //             )
    //         },
    //     },
    //     toggleExpansion: {
    //         measuresSummary: () => {
    //             this.setState(
    //                 (prevState: AppState) => ({
    //                     expanded: {
    //                         ...prevState.expanded,
    //                         measuresSummaryBoard: !prevState.expanded.measuresSummaryBoard,
    //                     }
    //                 })
    //             )
    //         },
    //     },
    }

    // Event listeners

    // componentDidMount() {
    //     window.addEventListener(
    //         'scroll',
    //         this.actions.conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY
    //     )
    // }

    // componentWillUnmount() {
    //     window.removeEventListener(
    //         'scroll',
    //         this.actions.conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY
    //     )
    // }

    // Render

    render() {
        return (
            <div>
                <header
                    className={styles.headerContainer}
                >
                    {/* <img src={PROTOIMG_nav_header} /> */}
                </header>

                <main
                    className={styles.main}
                >
                    Count: {this.state.count}

                    <button
                        onClick={this.actions.incrementCount}
                    >
                        Increment
                    </button>
                    <button
                        onClick={this.actions.decrementCount}
                    >
                        Decrement
                    </button>
                </main>

                <AssetsLoader />
            </div>
        )
    }
}

export default hot(module)(App)
