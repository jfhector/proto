export type Duration = '4 weeks' | '12 weeks' | '26 weeks' | '52 weeks'

type ComparisonAvailableFor4WeekDuration = 'vs. last year' | 'vs. previous 4 weeks'
type ComparisonAvailableFor12WeekDuration = 'vs. last year' | 'vs. previous 12 weeks'
type ComparisonAvailableFor26WeekDuration = 'vs. last year' | 'vs. previous 26 weeks'
type ComparisonAvailableFor52WeekDuration = 'vs. last year' | 'vs. previous 52 weeks'
export type Comparison = ComparisonAvailableFor4WeekDuration | ComparisonAvailableFor12WeekDuration | ComparisonAvailableFor26WeekDuration | ComparisonAvailableFor52WeekDuration

export type TopLevelCategory = 'MEDICINE'
export type Subcategory = 'All product groups' | 'DERMATOLOGY' | 'GASTRIC HEALTH' | 'INTESTINE HEALTH' | 'CHOLESTEROL' | 'CARDIOTHERAPY' | 'ANTICOAGULANT' | 'WEIGHT CONTROL' | 'HYPERTENSION'
export type Region = 'All regions' | 'North region' | 'Central region' | 'West region' | 'South region'
export type StoreFormat = 'All store formats' | 'Express stores' | 'Metro stores' | 'Extra stores' | 'Online'
export type CustomerSegment = 'All customer segments' | 'Young single person' | 'Family with young children' | 'Post family' | 'Older person'

export interface FiltersSet {
      duration: Duration,
      dates: string,
      comparison: Comparison,
      subcategory: Subcategory,
      region: Region,
      storeFormat: StoreFormat,
      customerSegment: CustomerSegment,
}

export type MeasureName = 'Sales value' | 
      'Spend per customer' | 'Customers' | 'Retailer visits' | 'Spend per visit' | 
      'Units per visit' | 'Basket penetration' | 'Frequency of purchase' | 'Sales units'

export interface MeasureData {
      value: string
      valueChange: string
      percentChange: string
      changedUpwards: boolean
}
