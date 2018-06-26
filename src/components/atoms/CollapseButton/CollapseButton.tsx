import * as React from 'react'
import * as styles from './CollapseButton.css'

interface Props {
    // Instance-specific data extracted from appState upsteam
    expanded?: boolean

    // Instance-specific function extracted from actions upstream
    handleClick?: React.MouseEventHandler<HTMLElement>
}

export class CollapseButton extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        handleClick: () => { console.log('CollapseButton clicked') },
    }

    render() {
        const { props } = this

        return (
            <div
                className={styles.CollapseButton}
                onClick={props.handleClick}
            >
                {props.expanded ? '\u2013' : '+'}
            </div>
        )
    }
}
