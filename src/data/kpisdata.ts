import { AppState } from '../App'

interface MeasureData {
      value: string
      valueChange: string
      percentChange: string
      changedUpwards: boolean
}

// export enum MeasuresForKpiTiles {
//       SalesValue = 'Sales value',
//       SpendPerCustomer = 'Spend per customer',
//       Customers = 'Customers',
//       RetailerVisits = 'Retailer visits',
//       SpendPerVisit = 'Spend per visit',
//       UnitsPerVisit = 'Units per visit',
//       BasketPenetration = 'Basket penetration',
//       FrequencyOfPurchase = 'Frequency of purchase',
//       SalesUnits = 'Sales units',
// }

export type MeasuresForKpiTiles = 'Sales value' | 
      'Spend per customer' | 'Customers' | 'Retailer visits' | 'Spend per visit' | 
      'Units per visit' | 'Basket penetration' | 'Frequency of purchase' | 'Sales units'

type KpisData = {[K in MeasuresForKpiTiles]: MeasureData}

// export function getMeasureValue(appState: AppState, measureName: MeasuresForKpiTiles) {
//       let kpiData = getKpisData(appState)

//       return kpiData[MeasuresForKpiTiles.SalesUnits]
// }

export function getKpisData(appState: AppState): KpisData {
      return ({
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
      })
}