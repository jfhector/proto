import * as React from 'react'
import * as styles from './Alert.css'
import * as classNames from 'classnames'

interface Props {
    children: React.ReactNode
    typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    dismissable?: boolean
    
    // State data selected from appState upstream
    visible: boolean

    // Instance-specific function extracted from actions upstream
    handleClick?: React.MouseEventHandler<HTMLElement>
}

export class Alert extends React.Component<Props, {}> {
    static defaultProps = {
        visible: true,
        typeOption: 'primary',
        dismissable: false,
        handleClick: () => { console.log('Alert was clicked') },
    }

    render() {
        const { props } = this

        return (
            <div
                className={classNames(
                    styles.Alert,
                    styles[props.typeOption!],
                    {
                        [styles.visible]: props.visible
                    }
                )}
                onClick={props.handleClick}
            >
                {props.children}

                {props.dismissable &&
                    <button
                        className={classNames(styles.button)}
                        type='button'
                        onClick={() => { }}
                    >
                        ×
                    </button>
                }
            </div>
        )
    }

}
