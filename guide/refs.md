# Refs

## Where refs are stored

On a property of the `App` class definition

TODO: Improvement: refs should be a property on `App` that contains an object, within which refs are placed (rather than having different properties for different refs)

## Where ref assignment functions are stored

On a property of the `App` class definition, which contains an object with all the app's ref assignment functions

## How refs are made

Don't transport refs. Only pass down ref assignment functions from the `App` instance to the instance of the component that needs can make the assignment, by passing down `refAssignmentFunctions` as a prop.

Then call the relevant ref assigment function where within the component instance where the right assignment can be made. Using closure, the function will assign the reference to the designated key on the object stores on the refs property of the `App` instance

TODO: Improvement: refs should be a property on `App` that contains an object, within which refs are placed (rather than having different properties for different refs)

TODO Elaborate / Clarify

## Where refs are used

Refs are only used as part of the actions function definitions on the `Class` definition

TODO: Is this true?

## Passing down the references object

```

```
