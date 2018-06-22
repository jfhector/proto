# Event listeners

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
