import App from './App'
import { categoryHierarchy, durationOptions, storeFormatOptions, regionOptions, customerSegmentOptions, measureOptions, dateOptionsFor4WeekDuration, dateOptionsFor12WeekDuration, dateOptionsFor26WeekDuration, dateOptionsFor52WeekDuration, comparisonOptionsFor4WeekDuration, comparisonOptionsFor12WeekDuration, comparisonOptionsFor26WeekDuration, comparisonOptionsFor52WeekDuration } from './data'

// APP STATE

export interface FiltersSet {
    duration: DurationOption
    dates: DateOption
    comparison: ComparisonOption
    subcategory: MedicineSubcategoryName
    region: RegionOption
    storeFormat: StoreFormatOption
    customerSegment: CustomerSegmentOption
}

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

// DURATION OPTIONS

export type DurationOption = keyof typeof durationOptions

// DATE OPTIONS

type DateOptionsObjectFor4WeekDuration = typeof dateOptionsFor4WeekDuration
type DateOptionsObjectFor12WeekDuration = typeof dateOptionsFor12WeekDuration
type DateOptionsObjectFor26WeekDuration = typeof dateOptionsFor26WeekDuration
type DateOptionsObjectFor52WeekDuration = typeof dateOptionsFor52WeekDuration
export type DateOptionsObject = 
    DateOptionsObjectFor4WeekDuration |
    DateOptionsObjectFor12WeekDuration |
    DateOptionsObjectFor26WeekDuration |
    DateOptionsObjectFor52WeekDuration

type DateOptionFor4WeekDuration = keyof DateOptionsObjectFor4WeekDuration
type DateOptionFor12WeekDuration = keyof DateOptionsObjectFor12WeekDuration
type DateOptionFor26WeekDuration = keyof DateOptionsObjectFor26WeekDuration
type DateOptionFor52WeekDuration = keyof DateOptionsObjectFor52WeekDuration
export type DateOption = 
    DateOptionFor4WeekDuration |
    DateOptionFor12WeekDuration |
    DateOptionFor26WeekDuration | 
    DateOptionFor52WeekDuration

// COMPARISON OPTIONS

type ComparisonOptionsObjectFor4WeekDuration = typeof comparisonOptionsFor4WeekDuration
type ComparisonOptionsObjectFor12WeekDuration = typeof comparisonOptionsFor12WeekDuration
type ComparisonOptionsObjectFor26WeekDuration = typeof comparisonOptionsFor26WeekDuration
type ComparisonOptionsObjectFor52WeekDuration = typeof comparisonOptionsFor52WeekDuration
export type ComparisonOptionsObject =
    ComparisonOptionsObjectFor4WeekDuration |
    ComparisonOptionsObjectFor12WeekDuration |
    ComparisonOptionsObjectFor26WeekDuration |
    ComparisonOptionsObjectFor52WeekDuration

type ComparisonOptionFor4WeekDuration = keyof ComparisonOptionsObjectFor4WeekDuration
type ComparisonOptionFor12WeekDuration = keyof ComparisonOptionsObjectFor12WeekDuration
type ComparisonOptionFor26WeekDuration = keyof ComparisonOptionsObjectFor26WeekDuration
type ComparisonOptionFor52WeekDuration = keyof ComparisonOptionsObjectFor52WeekDuration
export type ComparisonOption =
    ComparisonOptionFor4WeekDuration |
    ComparisonOptionFor12WeekDuration |
    ComparisonOptionFor26WeekDuration |
    ComparisonOptionFor52WeekDuration

// OTHER SELECTOR OPTIONS

export type MedicineSubcategoryName = keyof typeof categoryHierarchy['MEDICINE']

export type StoreFormatOption = keyof typeof storeFormatOptions

export type RegionOption = keyof typeof regionOptions

export type CustomerSegmentOption = keyof typeof customerSegmentOptions

export type MeasureOption = keyof typeof measureOptions

// MEASURE DATA

export interface MeasureData {
      value: string
      valueChange: string
      percentChange: string
      changedUpwards: boolean
}

export type KpisDataForAllMeasures = {[K in MeasureOption]: MeasureData}
