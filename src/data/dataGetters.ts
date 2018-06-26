import { DurationOption, DateOptionsObject, ComparisonOptionsObject, AppState, KpisDataForAllMeasures } from '../sharedTypes'
import { dateOptionsFor4WeekDuration, dateOptionsFor12WeekDuration, dateOptionsFor26WeekDuration, dateOptionsFor52WeekDuration, comparisonOptionsFor52WeekDuration, comparisonOptionsFor4WeekDuration, comparisonOptionsFor26WeekDuration, comparisonOptionsFor12WeekDuration, dataForAllMeasuresBasedOnAppState0, dataForAllMeasuresBasedOnAppState1, dataForAllMeasuresBasedOnAppState2, dataForAllMeasuresBasedOnAppState3, dataForAllMeasuresBasedOnAppState4 } from './'

export function datesOptionsFor(selectedDuration: DurationOption): DateOptionsObject {
    switch (selectedDuration) {
        case '4 weeks': 
            return dateOptionsFor4WeekDuration
        case '12 weeks': 
            return dateOptionsFor12WeekDuration
        case '26 weeks': 
            return dateOptionsFor26WeekDuration
        case '52 weeks': 
            return dateOptionsFor52WeekDuration
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}

export function comparisonOptionsFor(selectedDuration: DurationOption): ComparisonOptionsObject {
    switch (selectedDuration) {
        case '52 weeks': 
            return comparisonOptionsFor52WeekDuration
        case '26 weeks': 
            return comparisonOptionsFor26WeekDuration
        case '12 weeks': 
            return comparisonOptionsFor12WeekDuration
        case '4 weeks': 
            return comparisonOptionsFor4WeekDuration
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}

export function kpisDataForAllMeasuresFor(appState: AppState): KpisDataForAllMeasures {

    // Deterministically derive an integer from 0 to 4 from appState
    const numberThatIsDifferentForDifferentValuesOfDisplayedFilters = Object.values(appState.displayedFilters).join().length + Number.parseInt(appState.displayedFilters.duration) + Number.parseInt(appState.displayedFilters.dates)
    const intFrom0To4 = numberThatIsDifferentForDifferentValuesOfDisplayedFilters % 5 as (0 | 1 | 2 | 3 | 4)

    // Switch on this number to return one of the data sets above
    switch (intFrom0To4) {
        case 0:
            return dataForAllMeasuresBasedOnAppState0
        case 1:
            return dataForAllMeasuresBasedOnAppState1
        case 2:
            return dataForAllMeasuresBasedOnAppState2
        case 3:
            return dataForAllMeasuresBasedOnAppState3
        case 4:
            return dataForAllMeasuresBasedOnAppState4
        default:
            const _exhaustiveCheck: never = intFrom0To4
            return _exhaustiveCheck
    }
}
