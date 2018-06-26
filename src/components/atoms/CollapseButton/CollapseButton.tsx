import * as React from 'react'
import * as s from './CollapseButton.css'

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
        const {
            expanded,
            handleClick,
        } = this.props

        return (
            <div
                className={s.CollapseButton}
                onClick={handleClick}
            >
                {expanded ? '\u2013' : '+'}
            </div>
        )
    }
}
