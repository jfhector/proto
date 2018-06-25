
// Indirectional imports:
import { categoryHierarchy } from './data/categoryHierarchy'
import App from './App'

// APP STATE

export interface AppState {

    // FILTERS SELECTION
    selectedFilters: FiltersSet,
    displayedFilters: FiltersSet,

    // VIEW UPDATE LOGIC
    dataViewNeedsUpdating: boolean,

    // SELECTED MEASURE 
    selectedMeasure: MeasureName,

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

export type DurationOption = 
      '52 weeks' | 
      '26 weeks' | 
      '12 weeks' | 
      '4 weeks'

export type DateOptionAvailableFor4WeekDuration = 
      '12 Feb 2018 - 11 Mar 2018' | 
      '05 Feb 2018 - 04 Mar 2018' | 
      '29 Jan 2018 - 25 Feb 2018' | 
      '22 Jan 2018 - 18 Feb 2018' | 
      '15 Jan 2018 - 11 Feb 2018' | 
      '08 Jan 2018 - 04 Feb 2018' | 
      '01 Jan 2018 - 28 Jan 2018' | 
      '25 Dec 2017 - 21 Jan 2018' | 
      '18 Dec 2017 - 14 Jan 2018' |
      '11 Dec 2017 - 07 Jan 2018' | 
      '04 Dec 2017 - 31 Dec 2017' | 
      '27 Nov 2017 - 24 Dec 2017' | 
      '20 Nov 2017 - 17 Dec 2017' | 
      '13 Nov 2017 - 10 Dec 2017' | 
      '06 Dec 2017 - 03 Dec 2017'

export type DateOptionAvailableFor12WeekDuration = 
      '11 Dec 2017 - 11 Mar 2018' |
      '04 Dec 2017 - 04 Mar 2018' |
      '27 Nov 2017 - 25 Feb 2018' |
      '20 Nov 2017 - 18 Feb 2018' |
      '13 Nov 2017 - 11 Feb 2018' |
      '06 Nov 2017 - 04 Feb 2018' |
      '30 Oct 2017 - 28 Jan 2018' |
      '23 Oct 2017 - 21 Jan 2018' |
      '16 Oct 2017 - 14 Jan 2018' |
      '09 Oct 2017 - 07 Jan 2018' |
      '02 Oct 2017 - 31 Dec 2017' |
      '25 Sept 2017 - 24 Dec 2017' |
      '18 Sept 2017 - 17 Dec 2017' |
      '11 Sept 2017 - 10 Dec 2017' |
      '04 Sept 2017 - 03 Dec 2017'

export type DateOptionAvailableFor26WeekDuration = 
      '31 Aug 2017 - 11 Mar 2018' |
      '24 Aug 2017 - 04 Mar 2018' |
      '14 Aug 2017 - 25 Feb 2018' |
      '07 Aug 2017 - 18 Feb 2018' |
      '31 Jul 2017 - 11 Feb 2018' |
      '24 Jul 2017 - 04 Feb 2018' |
      '17 Jul 2017 - 28 Jan 2018' |
      '10 Jul 2017 - 21 Jan 2018' |
      '03 Jul 2017 - 14 Jan 2018' |
      '26 Jun 2017 - 07 Jan 2018' |
      '19 Jun 2017 - 31 Dec 2017' |
      '12 Jun 2017 - 24 Dec 2017' |
      '05 Jun 2017 - 17 Dec 2017' |
      '29 May 2017 - 10 Dec 2017' |
      '22 May 2017 - 03 Dec 2017'

export type DateOptionAvailableFor52WeekDuration = 
      '13 Mar 2017 - 11 Mar 2018' |
      '06 Mar 2017 - 04 Mar 2018' |
      '27 Feb 2017 - 25 Feb 2018' |
      '20 Feb 2017 - 18 Feb 2018' |
      '13 Feb 2017 - 11 Feb 2018' |
      '06 Feb 2017 - 04 Feb 2018' |
      '30 Jan 2017 - 28 Jan 2018' |
      '23 Jan 2017 - 21 Jan 2018' |
      '16 Jan 2017 - 14 Jan 2018' |
      '09 Jan 2017 - 07 Jan 2018' |
      '02 Jan 2017 - 31 Dec 2017' |
      '26 Dec 2016 - 24 Dec 2017' |
      '19 Dec 2016 - 17 Dec 2017' |
      '12 Dec 2016 - 10 Dec 2017' |
      '05 Dec 2016 - 03 Dec 2017'

export type DateOption = 
      DateOptionAvailableFor4WeekDuration |
      DateOptionAvailableFor12WeekDuration |
      DateOptionAvailableFor26WeekDuration | 
      DateOptionAvailableFor52WeekDuration

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

// PRODUCT CATEGORY

export type MedicineSubcategoryName = keyof typeof categoryHierarchy['MEDICINE']

// FILTERS

export type StoreFormatOption = 
      'All store formats' | 
      'Express stores' | 
      'Metro stores' | 
      'Extra stores' | 
      'Online'

export type RegionOption = 
      'All regions' | 
      'North region' | 
      'Central region' | 
      'West region' | 
      'South region'

export type CustomerSegmentOption = 
      'All customer segments' | 
      'Young single person' | 
      'Family with young children' | 
      'Post family' | 
      'Older person'

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

// MEASURE NAMES AND MEASURE DATA

export type MeasureName = 
      'Sales value' | 
      'Spend per customer' | 
      'Customers' | 
      'Retailer visits' | 
      'Spend per visit' | 
      'Units per visit' | 
      'Basket penetration' | 
      'Frequency of purchase' | 
      'Sales units'

export interface MeasureData {
      value: string
      valueChange: string
      percentChange: string
      changedUpwards: boolean
}

export type KpisDataForAllMeasures = {[K in MeasureName]: MeasureData}
