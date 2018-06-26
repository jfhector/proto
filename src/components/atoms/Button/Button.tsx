import * as React from 'react'
import * as styles from './Button.css'
import * as classNames from 'classnames'

interface Props {
    children: React.ReactNode
    disabled?: boolean
    fullWidth?: boolean
    typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    sizeOption?: 'small' | 'medium' | 'large'

    // Instance-specific function extracted from actions upstream
    handleButtonClick?: React.MouseEventHandler<HTMLElement>
}

export class Button extends React.Component<Props, {}> {
    static defaultProps = {
        disabled: false,
        handleButtonClick: () => { console.log('Button clicked') },
        typeOption: 'primary',
        sizeOption: 'medium',
        fullWidth: false,
    }

    render() {
        const { props } = this

        return (
            <button
                className={classNames(
                    styles.Button,
                    styles[props.typeOption!],
                    styles[props.sizeOption!],
                    {
                        [styles.fullWidth]: props.fullWidth,
                        [styles.disabled]: props.disabled,
                    }
                )}
                onClick={!props.disabled ? props.handleButtonClick : (() => { console.log('Button was clicked but is disabled') })}
            >
                {props.children}
            </button>
        )
    }

}
