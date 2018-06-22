Status

DONE
index.css
index.tsx

MORE TO DO

sharedTypes
start again at DermatologySubcategoryName

app.tsx working through the actions object
also need to have (this.refToMeasureInDetailBoardHeaderContainingDiv.getBoundingClientRect() as DOMRect).top > 0
and more detailed examples of how I've used refs together with event listeners

data folder
DID for more to cover:
eg comparison: getComparisonOptions(newlySelectedDuration)[0]
eg how this data get used


# proto
Simple, ready-to-use boilerplate for rapid prototyping with:
• React, React Hot Loader
• Typescript, TS Lint
• Style presets, templates and patterns for rapid prototyping

# Installation
1. clone this repo using git clone, or download it here
2. npm install
3. npm run start
4. go to http://localhost:8080/

# Recommended patterns for fast prototyping with this boilerplate

## Type definitions

### Where type definitions are located

These are the types that a component might use, and where the type defintions are located:

- `Props` type is defined locally in each component file, before the type definition
- `AppState` is defined as part of App.tsx, before the `App` class definition
- There is no other state object than `AppState`
- Any other types are defined in sharedTypes.ts as they will be shared across multiple files / components

### Defining shared types in a separate file

sharedTypes.ts

In this file, define all models used throughout the app (unless they are local to 1 component, eg Props).

Do this as a first, planning step, as a way to define a single source of truth.
Then, by adopting these types, you are forced to ensure that your data complies to these models. And then there are errors or inconsistencies, you use this a the source of truth.

It might seem unnecessary duplication to define for example a DurationOption type as follows:

```
export type DurationOption = 
      '52 weeks' | 
      '26 weeks' | 
      '12 weeks' | 
      '4 weeks'
```

... then later, part of the app's data, a durationOptions array:

```
export const durationOptions: DurationOption[] = [
    '4 weeks',
    '12 weeks',
    '26 weeks',
    '52 weeks',
]
```

but this is actually efficient as I will need all these throughout my code:
- durationOptions array
- DurationOption type (eg when specifying the type of a function argument)
- [DurationOption] type

eg 1

```
changeSelectedDuration: (newlySelectedDuration: DurationOption) => {
    this.setState(
        (prevState: AppState) => ({
            selectedFilters: {
                ...prevState.selectedFilters,
                duration: newlySelectedDuration,
                comparison: getComparisonOptions(newlySelectedDuration)[0]
            },
            dataViewNeedsUpdating: true,
        } as AppState)
    )
}
```
eg 3

```
export function getComparisonOptions(selectedDuration: DurationOption):
    ComparisonOptionAvailableFor4WeekDuration[] |
    ComparisonOptionAvailableFor12WeekDuration[] |
    ComparisonOptionAvailableFor26WeekDuration[] |
    ComparisonOptionAvailableFor52WeekDuration[] {
    switch (selectedDuration) {
        case '52 weeks': return [
            'vs. previous 52 weeks'
        ]
        case '26 weeks': return [
            'vs. previous 26 weeks',
            'vs. last year',
        ]
        case '12 weeks': return [
            'vs. previous 12 weeks',
            'vs. last year',
        ]
        case '4 weeks': return [
            'vs. previous 4 weeks',
            'vs. last year',
        ]
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}

```

eg 2

```
<Selector
   optionsArray={durationOptions}
   value={selectedFilters.duration}
	handleSelectorChange={actions.selectionChanges.changeSelectedDuration}
/>
```

### Using Typescript magic strings to define types

eg
```
export type DurationOption = 
      '52 weeks' | 
      '26 weeks' | 
      '12 weeks' | 
      '4 weeks'
```

Means that a variable of type `DurationOption` can only have one of these 4 string values.

### Building nested types

Define the leaf-most types first, then the higher-level types.

Eg 1

```
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
```

Here's how this might get used:
```
export function getComparisonOptions(selectedDuration: DurationOption):
    ComparisonOptionAvailableFor4WeekDuration[] |
    ComparisonOptionAvailableFor12WeekDuration[] |
    ComparisonOptionAvailableFor26WeekDuration[] |
    ComparisonOptionAvailableFor52WeekDuration[] {
    switch (selectedDuration) {
        case '52 weeks': return [
            'vs. previous 52 weeks'
        ]
        case '26 weeks': return [
            'vs. previous 26 weeks',
            'vs. last year',
        ]
        case '12 weeks': return [
            'vs. previous 12 weeks',
            'vs. last year',
        ]
        case '4 weeks': return [
            'vs. previous 4 weeks',
            'vs. last year',
        ]
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}
```

Eg 2

```
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

...

export type DateOption = 
      DateOptionAvailableFor4WeekDuration |
      DateOptionAvailableFor12WeekDuration |
      DateOptionAvailableFor26WeekDuration | 
      DateOptionAvailableFor52WeekDuration
```

`DateOption` is used, among other places, in the `actions` function definition in the `App` class definition:
```
changeSelectedDates: (newlySelectedDates: DateOption) => {
    this.setState(
        (prevState: AppState) => ({
            selectedFilters: {
                ...prevState.selectedFilters,
                dates: newlySelectedDates
            },
            dataViewNeedsUpdating: true,
        } as AppState)
    )
},
```

`getDatesOptions` returns an array containing only elements of one of these types, depending on `selectedDuration` or dype `DurationOption`:
```
export function getDatesOptions(selectedDuration: DurationOption):
    DateOptionAvailableFor4WeekDuration[] |
    DateOptionAvailableFor12WeekDuration[] |
    DateOptionAvailableFor26WeekDuration[] |
    DateOptionAvailableFor52WeekDuration[] {
    switch (selectedDuration) {
        case '4 weeks': return [
            '12 Feb 2018 - 11 Mar 2018',
            '05 Feb 2018 - 04 Mar 2018',
            '29 Jan 2018 - 25 Feb 2018',
            '22 Jan 2018 - 18 Feb 2018',
            '15 Jan 2018 - 11 Feb 2018',
            '08 Jan 2018 - 04 Feb 2018',
            '01 Jan 2018 - 28 Jan 2018',
            '25 Dec 2017 - 21 Jan 2018',
            '18 Dec 2017 - 14 Jan 2018',
            '11 Dec 2017 - 07 Jan 2018',
            '04 Dec 2017 - 31 Dec 2017',
            '27 Nov 2017 - 24 Dec 2017',
            '20 Nov 2017 - 17 Dec 2017',
            '13 Nov 2017 - 10 Dec 2017',
            '06 Dec 2017 - 03 Dec 2017'
        ]
        case '12 weeks': return [
            '11 Dec 2017 - 11 Mar 2018',
				...
        ]
        case '26 weeks': return [
            '31 Aug 2017 - 11 Mar 2018',
				...
        ]
        case '52 weeks': return [
            '13 Mar 2017 - 11 Mar 2018',
				...
        ]
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}
```

### Importing type definitions where they are needed

eg from a component file (Sidebar.tsx)
```
import { DurationOption, DateOption, ComparisonOption, MedicineSubcategoryName, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
```
## Model data

## State management

### Where state is stored

The app's state is stored in 1, and only 1 place: on the `state` property of the root `App` class definition

```
class App extends React.Component<Props, AppState> {
    refToMeasureInDetailBoardHeaderContainingDiv: HTMLDivElement

    state: AppState = {
        selectedFilters: {
            duration: '4 weeks',
            dates: '25 Dec 2017 - 21 Jan 2018',
            comparison: 'vs. previous 4 weeks',
            subcategory: 'All product groups',
            storeFormat: 'All store formats',
            customerSegment: 'All customer segments',
            region: 'All regions',
        },
        displayedFilters: {
            duration: '4 weeks',
            dates: '25 Dec 2017 - 21 Jan 2018',
            comparison: 'vs. previous 4 weeks',
            subcategory: 'All product groups',
            storeFormat: 'All store formats',
            customerSegment: 'All customer segments',
            region: 'All regions'
        },
        dataViewNeedsUpdating: false,

        selectedMeasure: 'Sales value',

        measuresSummaryExpanded: true,
        measuresInDetailExpanded: true,
        KPITreesExpanded: false,

        trendGraphExpanded: false,
        splitBySubcategoryExpanded: false,
        splitByStoreFormatExpanded: false,
        splitByCustomerSegmentExpanded: false,
        splitByRegionExpanded: false,

        measureInDetailBoardHeaderVisible: false,
    }
    
    ...
    
}
```

### Using nesting within the state object

See example above

### How the type of state is defined

In App.tsx, before the `App` class definition, the `AppState` type is defined as an interface.

```
export interface AppState {

    // FILTERS SELECTION AND RELATED VIEW-LOGIC
    selectedFilters?: FiltersSet,
    displayedFilters?: FiltersSet,
    dataViewNeedsUpdating?: boolean,

    // SELECTED MEASURE 
    selectedMeasure?: MeasureName,

    // DEFINES WHICH CONTENT BOARDS ARE EXPANDED
    measuresSummaryExpanded?: boolean,
    measuresInDetailExpanded?: boolean,
    KPITreesExpanded?: boolean,

    // DEFINES WHICH CONTENT MODULES ARE EXPANDED
    trendGraphExpanded?: boolean,
    splitBySubcategoryExpanded?: boolean,
    splitByRegionExpanded?: boolean,
    splitByStoreFormatExpanded?: boolean,
    splitByCustomerSegmentExpanded?: boolean,

    // MEASURE IN DETAIL HEADER VISIBLE
    measureInDetailBoardHeaderVisible?: boolean,
}
```

Then this `AppState` interface is passed into the `App` class definition as the type for its `state` property.

```
class App extends React.Component<Props, AppState> {
```

If the `AppState` interface makes use of other types in its definition, define these other types just before the `AppState` definition whenever possible.

TODO: EG

### How state gets updated

State only gets updated when action functions get called.

All action functions are stored in an object stored on the `actions` property of the `App` class.

These action function definitions can be grouped into objects stored on the object stored on the `actions` property of the `App` class.

```
actions = {
    updateView: () => {
        this.setState(
            (prevState: AppState) => ({
                displayedFilters: prevState.selectedFilters,
                dataViewNeedsUpdating: false,
            })
        )
    },
    
    ...
    
    selectionChanges: {
        changeSelectedDuration: (newlySelectedDuration: DurationOption) => {
            this.setState(
                (prevState: AppState) => ({
                    selectedFilters: {
                        ...prevState.selectedFilters,
                        duration: newlySelectedDuration,
                        comparison: getComparisonOptions(newlySelectedDuration)[0]
                    },
                    dataViewNeedsUpdating: true,
                } as AppState)
            )
        },
        changeSelectedDates: (newlySelectedDates: DateOption) => {
            this.setState(
                (prevState: AppState) => ({
                    selectedFilters: {
                        ...prevState.selectedFilters,
                        dates: newlySelectedDates
                    },
                    dataViewNeedsUpdating: true,
                } as AppState)
            )
        },
        
        ...
        
    },
    expansionToggles: {
        toggleMeasuresSummaryExpanded: () => {
            this.setState(
                (prevState: AppState) => ({
                    measuresSummaryExpanded: !prevState.measuresSummaryExpanded,
                })
            )
        },
        toggleKPITreesExpanded: () => {
            this.setState(
                (prevState: AppState) => ({
                    KPITreesExpanded: !prevState.KPITreesExpanded
                })
            )
        },
        
		...
    },
}
```

### How setState gets called


#### Updating a root key of the state object

When updating a root key of the state object, calling setState is done through the standard method, by passing in a function that receives the previousState object as an argument and returns _parts_ of the new state object.

```
updateView: () => {
    this.setState(
        (prevState: AppState) => ({
            displayedFilters: prevState.selectedFilters,
            dataViewNeedsUpdating: false,
        })
    )
},
```


#### Updating part of the nested state object

The function passed into setState always needs to return one or several key/value pairs corresponding to the root keys of the state object.

If I only want to update just a part of one of the value of one of these keys, I use the spread operator to return copy of value of a whole key then make some modifications, so that I can return the whole key/value pair.

```
changeSelectedComparison: (newlySelectedComparison: ComparisonOption) => {
    this.setState(
        (prevState: AppState) => ({
            selectedFilters: {
                ...prevState.selectedFilters,
                comparison: newlySelectedComparison,
            },
            dataViewNeedsUpdating: true,
        } as AppState)
    )
},
```

TODO inc why .. as AppState in some cases
?? WHY Do I need to say 'as AppState'? Or rather, or does this comply to the 'AppState' type?





### Passing down the state object

```

```


### Passing down the actions object

```

```







## Props management

Each component file (including the root `App` component), has a `Prop` interface definition before the class definion.

This interface is then passed to the component's definition as the type for its props.

TODO Eg

This is the case even for the root `App` component, even though it doesn't take any prop.

```
interface Props { }

class App extends React.Component<Props, AppState> { ... }
```

## Refs

### Where refs are stored

On a property of the `App` class definition

TODO: Improvement: refs should be a property on `App` that contains an object, within which refs are placed (rather than having different properties for different refs)

### Where ref assignment functions are stored

On a property of the `App` class definition, which contains an object with all the app's ref assignment functions

### How refs are made

Don't transport refs. Only pass down ref assignment functions from the `App` instance to the instance of the component that needs can make the assignment, by passing down `refAssignmentFunctions` as a prop.

Then call the relevant ref assigment function where within the component instance where the right assignment can be made. Using closure, the function will assign the reference to the designated key on the object stores on the refs property of the `App` instance

TODO: Improvement: refs should be a property on `App` that contains an object, within which refs are placed (rather than having different properties for different refs)

TODO Elaborate / Clarify

### Where refs are used

Refs are only used as part of the actions function definitions on the `Class` definition

TODO: Is this true?

### Passing down the references object

```

```

## Assets management

Images are stores in an `assets` folder, inside the `src` folder.

Images are imported via an `require` statement at the top of each module, from the assets folder.

?? Image hashing?

### Pre-loading images


## Styling

### Using the css modules

Define a separate CSS file for each component. 

Import the css file into the component. Each component has:
```
import * as s from './App.css'
```

?? s refers to .. .. ..


### Defining a prototyping colour palette using CSS properties in index.css

```
:root {
    /* COLOR REFERENCES */
    --color_shark: #25272c;

    /* BOOTSTRAP PALETTE */
    --color_azureRadiance: #007bff;
    --color_greenHaze: #01a368;
    --color_cinnabar: #e34234;
    --color_easternBlueLight: #1e9ab0;
    --color_outerSpace: #2d383a;
    --color_paleSky: #6e7783;
    --color_iron: #d4d5d9;
    --color_athensGray: #eef0f3;
    --color_fbfbfc: #fbfbfc;

    /* DUNNHUMBY PALETTE */
    --color_tuatara: #363534;

    /* TEXT COLOR PALETTE */
    --textColor_default: var(--color_shark);
    --textColor_grey: var(--color_paleSky);
    --textColor_links_active: var(--color_azureRadiance);
    --textColor_links_disabled: var(--color_paleSky);
    --textColor_alert_primary: #004085;

	...
}
```

Here's how to use these colour references in a component's css file:
```
color: var(--textColor_default);
```


### Reseting some default styles in index.css

```
html {
    font-size: 10px;
    font-family: system-ui, sans-serif;
    color: var(--textColor_default);
}

body {
    margin: 0;
    background-color: var(--backgroundColor_backgrounds_athensGray);
}

* {
    box-sizing: border-box;
}

p {
    margin: 0;
}

div {
    user-select: none;
}
```




## Event listeners

All event listeners are added, and removed, using the lifecycle hooks of the root `App` class.

```
// Event listeners

componentDidMount() {
    window.addEventListener(
        'scroll',
        this.actions.conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY
    )
}

componentWillUnmount() {
    window.removeEventListener(
        'scroll',
        this.actions.conditionallySetMeasureInDetailBoardHeaderVisibleStateBasedOnScrollY
    )
}
```

When they are triggered, they call an action.

## Imports and exports

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











## How to recreate this set-up from scratch

### Enabling CSS modules

### Enabling hot reload

### Enabling typescript

### Handling image assets with webpack

See create-react-app

?? Also explain my pattern








# ?

Why do I need to do this in a switch statement
```
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck           
```

