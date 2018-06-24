import * as React from 'react'
import * as s from './AssetsPreLoader.css'

// Assets for pre-loading
const PROTOIMG_graph_salesValue = require('./PROTOIMG_graph_salesValue.png')
const PROTOIMG_graph_customers = require('./PROTOIMG_graph_customers.png')
const PROTOIMG_graph_spendPerCustomer = require('./PROTOIMG_graph_spendPerCustomer.png')
const PROTOIMG_graph_spendPerVisit = require('./PROTOIMG_graph_spendPerVisit.png')

const PROTOIMG_table_subcategories_customers = require('./PROTOIMG_table_subcategories_customers.png')
const PROTOIMG_table_subcategories_salesValue = require('./PROTOIMG_table_subcategories_salesValue.png')
const PROTOIMG_table_subcategories_spendPerCustomer = require('./PROTOIMG_table_subcategories_spendPerCustomer.png')
const PROTOIMG_table_subcategories_spendPerVisit = require('./PROTOIMG_table_subcategories_spendPerVisit.png')

const PROTOIMG_table_customerTypes_salesValue = require('./PROTOIMG_table_customerTypes_salesValue.png')
const PROTOIMG_table_regions_salesValue = require('./PROTOIMG_table_regions_salesValue.png')
const PROTOIMG_table_storeFormats_salesValue = require('./PROTOIMG_table_storeFormats_salesValue.png')

const PROTOIMG_kpiTree = require('./PROTOIMG_kpiTree.png')

export class AssetsPreLoader extends React.Component<{}, {}> {
    render() {
        return (
            <div
                className={s.AssetsPreLoader}
            >
                <img src={PROTOIMG_graph_salesValue}/>
                <img src={PROTOIMG_graph_customers}/>
                <img src={PROTOIMG_graph_spendPerCustomer}/>
                <img src={PROTOIMG_graph_spendPerVisit}/>

                <img src={PROTOIMG_table_subcategories_customers}/>
                <img src={PROTOIMG_table_subcategories_salesValue}/>
                <img src={PROTOIMG_table_subcategories_spendPerCustomer}/>
                <img src={PROTOIMG_table_subcategories_spendPerVisit}/>

                <img src={PROTOIMG_table_customerTypes_salesValue}/>
                <img src={PROTOIMG_table_regions_salesValue}/>
                <img src={PROTOIMG_table_storeFormats_salesValue}/>

                <img src={PROTOIMG_kpiTree}/>
            </div>
        )
    }
}