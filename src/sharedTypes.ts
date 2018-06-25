
// Indirectional imports:
import App from './App'
import { categoryHierarchy, durationOptions, storeFormatOptions, regionOptions, customerSegmentOptions, measureOptions, dateOptionsFor4WeekDuration, dateOptionsFor12WeekDuration, dateOptionsFor26WeekDuration, dateOptionsFor52WeekDuration } from './data'

// APP STATE

export interface AppState {

    // FILTERS SELECTION
    selectedFilters: FiltersSet,
    displayedFilters: FiltersSet,

    // VIEW UPDATE LOGIC
    dataViewNeedsUpdating: boolean,

    // SELECTED MEASURE 
    selectedMeasure: MeasureOption,

    // DEFINES WHICH CONTENT BOARDS AND MODULES ARE EXPANDED
    expanded: {
        measuresSummaryBoard: boolean,
        measuresInDetailBoard: boolean,
        kpisTreesBoard: boolean,
    
        trendGraphModule: boolean,
        splitBySubcategoryModule: boolean,
        splitByRegionModule: boolean,
        splitByStoreFormatModule: boolean,
        splitByCustomerSegmentModule: boolean,
    },

    // MEASURE IN DETAIL HEADER VISIBLE
    measureInDetailBoardHeaderVisible: boolean,
}

// ACTIONS

export type Actions = typeof App.prototype.actions

// REF ASSIGNMENT FUNCTIONS

export type RefAssignmentFunctions = typeof App.prototype.refAssignmentFunctions

// ANALYSIS PERIOD AND COMPARISON PERIOD

export type DurationOption = keyof typeof durationOptions

type DateOptionFor4WeekDuration = keyof typeof dateOptionsFor4WeekDuration
type DateOptionFor12WeekDuration = keyof typeof dateOptionsFor12WeekDuration
type DateOptionFor26WeekDuration = keyof typeof dateOptionsFor26WeekDuration
type DateOptionFor52WeekDuration = keyof typeof dateOptionsFor52WeekDuration
export type DateOption = 
      DateOptionFor4WeekDuration |
      DateOptionFor12WeekDuration |
      DateOptionFor26WeekDuration | 
      DateOptionFor52WeekDuration

type DateOptionsObjectFor4WeekDuration = typeof dateOptionsFor4WeekDuration
type DateOptionsObjectFor12WeekDuration = typeof dateOptionsFor12WeekDuration
type DateOptionsObjectFor26WeekDuration = typeof dateOptionsFor26WeekDuration
type DateOptionsObjectFor52WeekDuration = typeof dateOptionsFor52WeekDuration
export type DateOptionsObject = 
    DateOptionsObjectFor4WeekDuration |
    DateOptionsObjectFor12WeekDuration |
    DateOptionsObjectFor26WeekDuration |
    DateOptionsObjectFor52WeekDuration

export type ComparisonOptionAvailableFor4WeekDuration = 
      'vs. last year' 
      | 'vs. previous 4 weeks'

export type ComparisonOptionAvailableFor12WeekDuration = 
      'vs. last year' | 
      'vs. previous 12 weeks'

export type ComparisonOptionAvailableFor26WeekDuration = 
      'vs. last year' | 
      'vs. previous 26 weeks'

export type ComparisonOptionAvailableFor52WeekDuration = 
      'vs. previous 52 weeks'

export type ComparisonOption =
      ComparisonOptionAvailableFor4WeekDuration |
      ComparisonOptionAvailableFor12WeekDuration |
      ComparisonOptionAvailableFor26WeekDuration |
      ComparisonOptionAvailableFor52WeekDuration








// SELECTOR OPTIONS

export type MedicineSubcategoryName = keyof typeof categoryHierarchy['MEDICINE']

export type StoreFormatOption = keyof typeof storeFormatOptions

export type RegionOption = keyof typeof regionOptions

export type CustomerSegmentOption = keyof typeof customerSegmentOptions

export interface FiltersSet {
      duration: DurationOption,
      dates: string,
      comparison: 
            ComparisonOptionAvailableFor4WeekDuration | 
            ComparisonOptionAvailableFor12WeekDuration | 
            ComparisonOptionAvailableFor26WeekDuration | 
            ComparisonOptionAvailableFor52WeekDuration,
      subcategory: MedicineSubcategoryName,
      region: RegionOption,
      storeFormat: StoreFormatOption,
      customerSegment: CustomerSegmentOption,
}

export type MeasureOption = keyof typeof measureOptions







// MEASURE DATA

export interface MeasureData {
      value: string
      valueChange: string
      percentChange: string
      changedUpwards: boolean
}

export type KpisDataForAllMeasures = {[K in MeasureOption]: MeasureData}
