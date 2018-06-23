import * as React from 'react'
import * as s from './Button.css'
import classNames = require('classnames')

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
        const {
            disabled,
            handleButtonClick,
            typeOption,
            sizeOption,
            fullWidth,
            children,
        } = this.props

        return (
            <button
                className={classNames(
                    s.Button,
                    s[typeOption!],
                    s[sizeOption!],
                    {
                        [s.fullWidth]: fullWidth,
                        [s.disabled]: disabled,
                    }
                )}
                onClick={!disabled ? handleButtonClick : (() => { console.log('Button was clicked but is disabled') })}
            >
                {children}
            </button>
        )
    }

}
