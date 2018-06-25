import React = require('react')
import App from '../../../App'
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'
import { AppState, Actions, DurationOption, ComparisonOption, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
import { durationOptions, getDatesOptions, getComparisonOptions, categoryHierarchy, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

interface Props {

    // Connecting the component
    appState: AppState
    actions: Actions
}

export class Sidebar extends React.Component<Props, {}> {
    render() {
        const {
            appState,
            actions,
        } = this.props

        // TYPE GUARDS
        if (typeof appState.selectedFilters === 'undefined') { throw new Error() }

        return (
            <div
                className={s.Sidebar}
            >
                <div
                    className={s.title}
                >
                    Configure view
                </div>

                <div
                    className={s.selectorGroupContainer}
                >
                    <div
                        className={s.selectorGroupTitle}
                    >
                        Analysis period
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(durationOptions)}
                            value={appState.selectedFilters.duration}
                            handleSelectorChange={actions.changeSelected.duration}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={getDatesOptions(appState.selectedFilters.duration)}
                            value={appState.selectedFilters.dates}
                            handleSelectorChange={actions.changeSelected.dates}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={getComparisonOptions(appState.selectedFilters.duration)}
                            value={appState.selectedFilters.comparison}
                            handleSelectorChange={actions.changeSelected.comparison}
                        />
                    </div>
                </div>

                <div
                    className={s.selectorGroupContainer}
                >
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
                    className={s.selectorGroupContainer}
                >
                    <div
                        className={s.selectorGroupTitle}
                    >
                        Data filters
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(categoryHierarchy['MEDICINE'])}
                            value={appState.selectedFilters.subcategory}
                            handleSelectorChange={actions.changeSelected.subcategory}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(regionOptions)}
                            value={appState.selectedFilters.region}
                            handleSelectorChange={actions.changeSelected.region}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(storeFormatOptions)}
                            value={appState.selectedFilters.storeFormat}
                            handleSelectorChange={actions.changeSelected.storeFormat}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={Object.keys(customerSegmentOptions)}
                            value={appState.selectedFilters.customerSegment}
                            handleSelectorChange={actions.changeSelected.customerSegment}
                        />
                    </div>
                </div>

                <Button
                    fullWidth
                    disabled={!appState.dataViewNeedsUpdating}
                    handleButtonClick={actions.updateView}
                >
                    Update view
                </Button>
            </div>
        )
    }
}
