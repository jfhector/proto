import { DurationOption, DateOptionsObject, ComparisonOptionAvailableFor4WeekDuration, ComparisonOptionAvailableFor12WeekDuration, ComparisonOptionAvailableFor26WeekDuration, ComparisonOptionAvailableFor52WeekDuration } from '../sharedTypes'
import { dateOptionsFor4WeekDuration, dateOptionsFor12WeekDuration, dateOptionsFor26WeekDuration, dateOptionsFor52WeekDuration } from './selectorOptions'

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

export function comparisonOptionsFor(selectedDuration: DurationOption):
    ComparisonOptionAvailableFor4WeekDuration[] |
    ComparisonOptionAvailableFor12WeekDuration[] |
    ComparisonOptionAvailableFor26WeekDuration[] |
    ComparisonOptionAvailableFor52WeekDuration[] {
    switch (selectedDuration) {
        case '52 weeks': return [
            'vs. previous 52 weeks'
        ]
        case '26 weeks': return [
            'vs. previous 26 weeks',
            'vs. last year',
        ]
        case '12 weeks': return [
            'vs. previous 12 weeks',
            'vs. last year',
        ]
        case '4 weeks': return [
            'vs. previous 4 weeks',
            'vs. last year',
        ]
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}
