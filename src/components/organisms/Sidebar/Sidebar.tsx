import React = require('react')
import App, { AppState } from '../../../App'
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'
import { DurationOption, ComparisonOption, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
import { durationOptions, getDatesOptions, getComparisonOptions, medicineSubcategories, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

interface Props {
    appState: AppState
    actions: typeof App.prototype.actions
}

export class Sidebar extends React.Component<Props, {}> {
    render() {
        const {
            appState,
            actions,
        } = this.props

        const {
            selectedFilters,
            dataViewNeedsUpdating,
        } = appState

        // TYPE GUARDS
        if (typeof selectedFilters === 'undefined') { throw new Error() }

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
                            optionsArray={durationOptions}
                            value={selectedFilters.duration}
                            handleSelectorChange={actions.selectionChanges.changeSelectedDuration}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={getDatesOptions(selectedFilters.duration)}
                            value={selectedFilters.dates}
                            handleSelectorChange={actions.selectionChanges.changeSelectedDates}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={getComparisonOptions(selectedFilters.duration)}
                            value={selectedFilters.comparison}
                            handleSelectorChange={actions.selectionChanges.changeSelectedComparison}
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
                            optionsArray={Object.keys(medicineSubcategories)}
                            value={selectedFilters.subcategory}
                            handleSelectorChange={actions.selectionChanges.changeSelectedSubcategory}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={regionOptions}
                            value={selectedFilters.region}
                            handleSelectorChange={actions.selectionChanges.changeSelectedRegion}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={storeFormatOptions}
                            value={selectedFilters.storeFormat}
                            handleSelectorChange={actions.selectionChanges.changeSelectedStoreFormat}
                        />
                    </div>

                    <div
                        className={s.selectorContainer}
                    >
                        <Selector
                            optionsArray={customerSegmentOptions}
                            value={selectedFilters.customerSegment}
                            handleSelectorChange={actions.selectionChanges.changeSelectedCustomerSegment}
                        />
                    </div>
                </div>

                <Button
                    fullWidth
                    disabled={!dataViewNeedsUpdating}
                    handleButtonClick={actions.updateView}
                >
                    Update view
                </Button>
            </div>
        )
    }
}
