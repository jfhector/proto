# Exports and imports

Using only named exports (rather than default exports) for clarify and simplicity, and also so that I can using a index.ts file in root folders (eg components, data, ..) to forward the exports. This allows me to import all the components from the same location, all the data from the same location, etc.

eg in Alert.tsx
```
export class Alert extends React.Component<Props, {}> { ... }
```

in index.ts, at the root of the components folder
```
// ATOMS
export * from './atoms/Counter/Counter'
export * from './atoms//Button/Button'
export * from './atoms/Alert/Alert'
export * from './atoms/CollapseButton/CollapseButton'
export * from './atoms/Selector/Selector'

// MOLECULES
export * from './molecules/KpiTile/KpiTile'
export * from './molecules/CollapsibleContentModule/CollapsibleContentModule'
export * from './molecules/CollapsibleContentBoard/CollapsibleContentBoard'
export * from './molecules/CollapsibleMeasureInDetailBoard/CollapsibleMeasureInDetailBoard'

// ORGANISMS
export * from './organisms/Sidebar/Sidebar'
export * from './organisms/DataViewComponent/DataViewComponent'
```

in a component that uses another component
```
import { Selector, Button } from '../..'
import { durationOptions, getDatesOptions, getComparisonOptions, medicineSubcategories, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'
```
