import * as React from 'react'
import * as s from './AssetsLoader.css'

export const PROTOIMG_graph_customers = require('./PROTOIMG_graph_customers.png')
export const PROTOIMG_graph_salesValue = require('./PROTOIMG_graph_salesValue.png')
export const PROTOIMG_graph_spendPerCustomer = require('./PROTOIMG_graph_spendPerCustomer.png')
export const PROTOIMG_graph_spendPerVisit = require('./PROTOIMG_graph_spendPerVisit.png')

export const PROTOIMG_kpiTree = require('./PROTOIMG_kpiTree.png')

export const PROTOIMG_nav_footer = require('./PROTOIMG_nav_footer.png')
export const PROTOIMG_nav_header = require('./PROTOIMG_nav_header.png')
export const PROTOIMG_nav_tabs = require('./PROTOIMG_nav_tabs.png')

export const PROTOIMG_table_customerTypes_salesValue = require('./PROTOIMG_table_customerTypes_salesValue.png')
export const PROTOIMG_table_regions_salesValue = require('./PROTOIMG_table_regions_salesValue.png')
export const PROTOIMG_table_storeFormats_salesValue = require('./PROTOIMG_table_storeFormats_salesValue.png')

export const PROTOIMG_table_subcategories_customers = require('./PROTOIMG_table_subcategories_customers.png')
export const PROTOIMG_table_subcategories_salesValue = require('./PROTOIMG_table_subcategories_salesValue.png')
export const PROTOIMG_table_subcategories_spendPerCustomer = require('./PROTOIMG_table_subcategories_spendPerCustomer.png')
export const PROTOIMG_table_subcategories_spendPerVisit = require('./PROTOIMG_table_subcategories_spendPerVisit.png')

export class AssetsLoader extends React.Component<{}, {}> {
    render() {

        // Pre-loading all assets, as AssetsLoader is inserted at the end of App
        return (
            <div
                className={s.AssetsPreLoader}
            >
                <img src={PROTOIMG_graph_customers}/>
                <img src={PROTOIMG_graph_salesValue}/>
                <img src={PROTOIMG_graph_spendPerCustomer}/>
                <img src={PROTOIMG_graph_spendPerVisit}/>

                <img src={PROTOIMG_kpiTree}/>

                <img src={PROTOIMG_nav_footer}/>
                <img src={PROTOIMG_nav_header}/>
                <img src={PROTOIMG_nav_tabs}/>
                
                <img src={PROTOIMG_table_customerTypes_salesValue}/>
                <img src={PROTOIMG_table_regions_salesValue}/>
                <img src={PROTOIMG_table_storeFormats_salesValue}/>

                <img src={PROTOIMG_table_subcategories_customers}/>
                <img src={PROTOIMG_table_subcategories_salesValue}/>
                <img src={PROTOIMG_table_subcategories_spendPerCustomer}/>
                <img src={PROTOIMG_table_subcategories_spendPerVisit}/>
            </div>
        )
    }
}
