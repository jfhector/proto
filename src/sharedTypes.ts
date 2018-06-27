import App from './App'
import {} from './data'

// APP STATE

// export type FiltersSet = {
//     duration: DurationOption
//     dates: DateOption
//     comparison: ComparisonOption
//     subcategory: MedicineSubcategoryOption
//     region: RegionOption
//     storeFormat: StoreFormatOption
//     customerSegment: CustomerSegmentOption
// }

export type AppState = {

    count: number

//     // FILTERS SELECTION
//     selectedFilters: FiltersSet,
//     displayedFilters: FiltersSet,

//     // VIEW UPDATE LOGIC
//     dataViewNeedsUpdating: boolean,

//     // SELECTED MEASURE 
//     selectedMeasure: MeasureOption,

//     // DEFINES WHICH CONTENT BOARDS AND MODULES ARE EXPANDED
//     expanded: {
//         measuresSummaryBoard: boolean,
//         measuresInDetailBoard: boolean,
//         kpisTreesBoard: boolean,
    
//         trendGraphModule: boolean,
//         splitBySubcategoryModule: boolean,
//         splitByRegionModule: boolean,
//         splitByStoreFormatModule: boolean,
//         splitByCustomerSegmentModule: boolean,
//     },

//     // MEASURE IN DETAIL HEADER VISIBLE
//     measureInDetailBoardHeaderVisible: boolean,
}

// ACTIONS

export type Actions = typeof App.prototype.actions

// REF ASSIGNMENT FUNCTIONS

export type RefAssignmentFunctions = typeof App.prototype.refAssignmentFunctions

// DURATION OPTIONS

// export type DurationOption = keyof typeof durationOptions

// DATE OPTIONS

// type DateOptionsObjectFor4WeekDuration = typeof dateOptionsFor4WeekDuration
// type DateOptionsObjectFor12WeekDuration = typeof dateOptionsFor12WeekDuration
// type DateOptionsObjectFor26WeekDuration = typeof dateOptionsFor26WeekDuration
// type DateOptionsObjectFor52WeekDuration = typeof dateOptionsFor52WeekDuration
// export type DateOptionsObject = 
//     DateOptionsObjectFor4WeekDuration |
//     DateOptionsObjectFor12WeekDuration |
//     DateOptionsObjectFor26WeekDuration |
//     DateOptionsObjectFor52WeekDuration

// type DateOptionFor4WeekDuration = keyof DateOptionsObjectFor4WeekDuration
// type DateOptionFor12WeekDuration = keyof DateOptionsObjectFor12WeekDuration
// type DateOptionFor26WeekDuration = keyof DateOptionsObjectFor26WeekDuration
// type DateOptionFor52WeekDuration = keyof DateOptionsObjectFor52WeekDuration
// export type DateOption = 
//     DateOptionFor4WeekDuration |
//     DateOptionFor12WeekDuration |
//     DateOptionFor26WeekDuration | 
//     DateOptionFor52WeekDuration
