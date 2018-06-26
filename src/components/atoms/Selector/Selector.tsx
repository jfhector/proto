import * as React from 'react'
import * as styles from './Selector.css'

interface Props {
    optionsArray: string[]
    value: string

    // Instance-specific function extraction from actions upstream
    handleSelectorChange?: (newSelection: string) => void
}

export class Selector extends React.Component<Props, {}> {
    static defaultProps = {
        handleSelectorChange: () => {},
    }

    render() {
        const { props } = this

        return (
            <select
                className={styles.Selector}
                value={props.value}
                onChange={(event) => props.handleSelectorChange!(event.target.value)}
            >
                {
                    props.optionsArray.map(
                        (arrayElement: string, index: number) => (
                            <option
                                key={arrayElement + String(index)}
                                value={arrayElement}
                            >
                                {arrayElement}
                            </option>
                        )
                    )
                }
            </select>
        )
    }
}
