import { AppState } from '../App'
import { MeasureData, MeasureName } from '../sharedTypes'

type DataForAllMeasures = { [k in MeasureName]: MeasureData }

export function getDataForMeasures(appState: AppState, measure: MeasureName): MeasureData {

      // Type guards
      if (typeof appState.displayedFilters === 'undefined') { throw new Error() }

      // Generate 5 options of MeasureData
      const dataForAllMeasuresBasedOnAppState0 = {
            ['Sales value']: {
                  value: 'R$5.823.489.124',
                  valueChange: '-R$488.843',
                  percentChange: '-7,7%',
                  changedUpwards: false,                              
            },
            ['Spend per customer']: {
                  value: 'R$3,41',
                  valueChange: '-R$1.21',
                  percentChange: '-2,1%',
                  changedUpwards: false,                        
            },
            ['Customers']: {
                  value: '1.712.897',
                  valueChange: '-359.429',
                  percentChange: '-5,8%',
                  changedUpwards: false,
            },
            ['Retailer visits']: {
                  value: '191.179.700',
                  valueChange: '+741.438',
                  percentChange: '+1,2%',
                  changedUpwards: true,
            },
            ['Spend per visit']: {
                  value: 'R$1,64',
                  valueChange: '-R$.04',
                  percentChange: '-0,5%',
                  changedUpwards: false,                              
            },
            ['Units per visit']: {
                  value: '8,90',
                  valueChange: '-5,1',
                  percentChange: '-0,6%',
                  changedUpwards: false,                              
            },
            ['Basket penetration']: {
                  value: '7,9%',
                  valueChange: '',
                  percentChange: '-0,6pts',
                  changedUpwards: false,                              
            },
            ['Frequency of purchase']: {
                  value: '2,08',
                  valueChange: '-0.8',
                  percentChange: '-2,6%',
                  changedUpwards: false,
            },
            ['Sales units']: {
                  value: '845.842.700',
                  valueChange: '+841.214',
                  percentChange: '+1,8%',
                  changedUpwards: true,
            },
      }

      const dataForAllMeasuresBasedOnAppState1 = {
            ['Sales value']: {
                  value: 'R$2.546.489.124',
                  valueChange: '+R$248.843',
                  percentChange: '+1,7%',
                  changedUpwards: true,                              
            },
            ['Spend per customer']: {
                  value: 'R$1,21',
                  valueChange: '+R$1.21',
                  percentChange: '+1,1%',
                  changedUpwards: true,                        
            },
            ['Customers']: {
                  value: '2.242.897',
                  valueChange: '-359.429',
                  percentChange: '-1,8%',
                  changedUpwards: false,
            },
            ['Retailer visits']: {
                  value: '82.179.700',
                  valueChange: '+741.438',
                  percentChange: '+4,2%',
                  changedUpwards: true,
            },
            ['Spend per visit']: {
                  value: 'R$3,14',
                  valueChange: '-R$.04',
                  percentChange: '-1,5%',
                  changedUpwards: false,                              
            },
            ['Units per visit']: {
                  value: '6,90',
                  valueChange: '-2,1',
                  percentChange: '-1,6%',
                  changedUpwards: false,                              
            },
            ['Basket penetration']: {
                  value: '6,1%',
                  valueChange: '',
                  percentChange: '+0,6pts',
                  changedUpwards: true,                              
            },
            ['Frequency of purchase']: {
                  value: '1,38',
                  valueChange: '-0.8',
                  percentChange: '-2,6%',
                  changedUpwards: false,
            },
            ['Sales units']: {
                  value: '£455.842.700',
                  valueChange: '+841.214',
                  percentChange: '+1,8%',
                  changedUpwards: true,
            },
      }

      const dataForAllMeasuresBasedOnAppState2 = {
            ['Sales value']: {
                  value: 'R$7.246.489.124',
                  valueChange: '-R$248.843',
                  percentChange: '-0,7%',
                  changedUpwards: false,                              
            },
            ['Spend per customer']: {
                  value: 'R$6,21',
                  valueChange: '-R$3.21',
                  percentChange: '-1,1%',
                  changedUpwards: false,                        
            },
            ['Customers']: {
                  value: '1.242.897',
                  valueChange: '+569.429',
                  percentChange: '+0,8%',
                  changedUpwards: true,
            },
            ['Retailer visits']: {
                  value: '41.355.700',
                  valueChange: '-351.438',
                  percentChange: '-3,1%',
                  changedUpwards: false,
            },
            ['Spend per visit']: {
                  value: 'R$3,14',
                  valueChange: '-R$.04',
                  percentChange: '-1,5%',
                  changedUpwards: false,                              
            },
            ['Units per visit']: {
                  value: '6,90',
                  valueChange: '-2,1',
                  percentChange: '-1,6%',
                  changedUpwards: false,                              
            },
            ['Basket penetration']: {
                  value: '4,1%',
                  valueChange: '',
                  percentChange: '-0,1pts',
                  changedUpwards: false,                              
            },
            ['Frequency of purchase']: {
                  value: '1,38',
                  valueChange: '-0.8',
                  percentChange: '-2,6%',
                  changedUpwards: false,
            },
            ['Sales units']: {
                  value: '£455.842.700',
                  valueChange: '+841.214',
                  percentChange: '+1,8%',
                  changedUpwards: true,
            },
      }

      const dataForAllMeasuresBasedOnAppState3 = {
            ['Sales value']: {
                  value: 'R$39.246.489.124',
                  valueChange: '-R$748.843',
                  percentChange: '-1,7%',
                  changedUpwards: false,                              
            },
            ['Spend per customer']: {
                  value: 'R$6,21',
                  valueChange: '-R$3.21',
                  percentChange: '-1,1%',
                  changedUpwards: false,                        
            },
            ['Customers']: {
                  value: '1.242.897',
                  valueChange: '+569.429',
                  percentChange: '+0,8%',
                  changedUpwards: true,
            },
            ['Retailer visits']: {
                  value: '41.355.700',
                  valueChange: '-351.438',
                  percentChange: '-3,1%',
                  changedUpwards: false,
            },
            ['Spend per visit']: {
                  value: 'R$3,14',
                  valueChange: '-R$.04',
                  percentChange: '-1,5%',
                  changedUpwards: false,                              
            },
            ['Units per visit']: {
                  value: '2,90',
                  valueChange: '+3,1',
                  percentChange: '+1,6%',
                  changedUpwards: true,                              
            },
            ['Basket penetration']: {
                  value: '4,1%',
                  valueChange: '',
                  percentChange: '-0,1pts',
                  changedUpwards: false,                              
            },
            ['Frequency of purchase']: {
                  value: '2,18',
                  valueChange: '+1.8',
                  percentChange: '+3,6%',
                  changedUpwards: true,
            },
            ['Sales units']: {
                  value: '£245.842.700',
                  valueChange: '+241.214',
                  percentChange: '+2,8%',
                  changedUpwards: true,
            },
      }

      const dataForAllMeasuresBasedOnAppState4 = {
            ['Sales value']: {
                  value: 'R$41.246.489.124',
                  valueChange: '+R$836.843',
                  percentChange: '+0,8%',
                  changedUpwards: true,                              
            },
            ['Spend per customer']: {
                  value: 'R$7,21',
                  valueChange: '+R$1.21',
                  percentChange: '+2,1%',
                  changedUpwards: true,                        
            },
            ['Customers']: {
                  value: '1.242.897',
                  valueChange: '+569.429',
                  percentChange: '+0,8%',
                  changedUpwards: true,
            },
            ['Retailer visits']: {
                  value: '5.355.700',
                  valueChange: '+231.438',
                  percentChange: '+1,1%',
                  changedUpwards: true,
            },
            ['Spend per visit']: {
                  value: 'R$3,14',
                  valueChange: '-R$.04',
                  percentChange: '-1,5%',
                  changedUpwards: false,                              
            },
            ['Units per visit']: {
                  value: '2,90',
                  valueChange: '+3,1',
                  percentChange: '+1,6%',
                  changedUpwards: true,                              
            },
            ['Basket penetration']: {
                  value: '4,1%',
                  valueChange: '',
                  percentChange: '-0,1pts',
                  changedUpwards: false,                              
            },
            ['Frequency of purchase']: {
                  value: '2,18',
                  valueChange: '+1.8',
                  percentChange: '+3,6%',
                  changedUpwards: true,
            },
            ['Sales units']: {
                  value: '£245.842.700',
                  valueChange: '+241.214',
                  percentChange: '+2,8%',
                  changedUpwards: true,
            },
      }

      // Deterministically derive an integer from 0 to 4 from appState
      const numberThatIsDifferentForDifferentValuesOfDisplayedFilters = Object.values(appState.displayedFilters).join().length + Number.parseInt(appState.displayedFilters.duration) + Number.parseInt(appState.displayedFilters.dates)
      const numberFrom0To4 = numberThatIsDifferentForDifferentValuesOfDisplayedFilters % 5
      if (!(numberFrom0To4 === 0 || numberFrom0To4 === 1 || numberFrom0To4 === 2 || numberFrom0To4 === 3 || numberFrom0To4 === 4)) { throw new Error('numberFrom0To3 wasn\'t 0, 1, 2 or 3') }

      // Switch on this number to return one of the data sets above
      switch (numberFrom0To4) {
            case 0:
                  return dataForAllMeasuresBasedOnAppState0[measure]
            case 1:
                  return dataForAllMeasuresBasedOnAppState1[measure]
            case 2:
                  return dataForAllMeasuresBasedOnAppState2[measure]
            case 3:
                  return dataForAllMeasuresBasedOnAppState3[measure]
            case 4:
                  return dataForAllMeasuresBasedOnAppState3[measure]
            default:
                  const _exhaustiveCheck: never = numberFrom0To4
                  return _exhaustiveCheck
      }
}
