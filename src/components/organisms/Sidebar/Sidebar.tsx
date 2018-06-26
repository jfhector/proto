import * as React from 'react'
import * as styles from './Sidebar.css'
import { Selector, Button } from '../..'
import { AppState, Actions, DurationOption, ComparisonOption, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
import { durationOptions, datesOptionsFor, comparisonOptionsFor, categoryHierarchy, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

interface Props {

    // Connecting the component
    appState: AppState
    actions: Actions
}

export class Sidebar extends React.Component<Props, {}> {
    render() {
        const { props } = this

        return (
            <div
                className={styles.Sidebar}
            >
                <div
                    className={styles.title}
                >
                    Configure view
                </div>

                <div
                    className={styles.selectorGroupContainer}
                >
                    <div
                        className={styles.selectorGroupTitle}
                    >
                        Analysis period
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(durationOptions)}
                            value={props.appState.selectedFilters.duration}
                            handleSelectorChange={props.actions.changeSelected.duration}
                        />
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(datesOptionsFor(props.appState.selectedFilters.duration))}
                            value={props.appState.selectedFilters.dates}
                            handleSelectorChange={props.actions.changeSelected.dates}
                        />
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(comparisonOptionsFor(props.appState.selectedFilters.duration))}
                            value={props.appState.selectedFilters.comparison}
                            handleSelectorChange={props.actions.changeSelected.comparison}
                        />
                    </div>
                </div>

                <div
                    className={styles.selectorGroupContainer}
                >
                    <div
                        className={styles.selectorGroupTitle}
                    >
                        Data source
                    </div>

                    <form
                        className={styles.radiosAndLabels}
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
                    className={styles.selectorGroupContainer}
                >
                    <div
                        className={styles.selectorGroupTitle}
                    >
                        Data filters
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(categoryHierarchy['MEDICINE'])}
                            value={props.appState.selectedFilters.subcategory}
                            handleSelectorChange={props.actions.changeSelected.subcategory}
                        />
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(regionOptions)}
                            value={props.appState.selectedFilters.region}
                            handleSelectorChange={props.actions.changeSelected.region}
                        />
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(storeFormatOptions)}
                            value={props.appState.selectedFilters.storeFormat}
                            handleSelectorChange={props.actions.changeSelected.storeFormat}
                        />
                    </div>

                    <div
                        className={styles.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(customerSegmentOptions)}
                            value={props.appState.selectedFilters.customerSegment}
                            handleSelectorChange={props.actions.changeSelected.customerSegment}
                        />
                    </div>
                </div>

                <Button
                    fullWidth
                    disabled={!props.appState.dataViewNeedsUpdating}
                    handleButtonClick={props.actions.updateView}
                >
                    Update view
                </Button>
            </div>
        )
    }
}
