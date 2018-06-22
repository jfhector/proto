
# Typing

## Where type definitions are located

These are the types that a component might use, and where the type defintions are located:

- `Props` type is defined locally in each component file, before the type definition.

	Each component file (including the root `App` component), has a `Prop` interface definition before the class definion.
This interface is then passed to the component's definition as the type for its props.

- `AppState` is defined as part of App.tsx, before the `App` class definition

- There is no other state object than `AppState`

- Any other types are defined in sharedTypes.ts as they will be shared across multiple files / components

## When to write type definitions

First, plan your app.
- What components will be required? What data will they use or present? What states will they be in?
- What pieces of state will be needed?

Write type definitions right after the planning stage, before writing any other code, as a way to define a single source of truth.

Then, by adopting these types, you are forced to ensure that your data complies to these models. And then there are errors or inconsistencies, you use this a the source of truth.

Then write more type definitions as you need them to type a variable or return type.

## Defining shared types in a separate file

sharedTypes.ts

In this file, define all models used throughout the app (unless they are local to 1 component, eg Props).

Eg define for example a DurationOption type as follows:

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

This is actually efficient as I will need all these throughout my code:
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
eg 2

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

eg 3

```
<Selector
   optionsArray={durationOptions}
   value={selectedFilters.duration}
	handleSelectorChange={actions.selectionChanges.changeSelectedDuration}
/>
```

## Using Typescript magic strings to define types

eg
```
export type DurationOption = 
      '52 weeks' | 
      '26 weeks' | 
      '12 weeks' | 
      '4 weeks'
```

Means that a variable of type `DurationOption` can only have one of these 4 string values.

## Building nested types

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

## Importing type definitions where they are needed

eg from a component file (Sidebar.tsx)
```
import { DurationOption, DateOption, ComparisonOption, MedicineSubcategoryName, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
```
