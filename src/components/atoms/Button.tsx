import * as React from 'react'
// import './Button.css'
const styles = require('./Button.css')

class Props {
      children: React.ReactNode

      disabled?: boolean
      handleButtonClick?: React.MouseEventHandler<HTMLElement>
      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      sizeOption?: 'small' | 'normal' | 'large'
      className?: string
      fullWidth?: boolean
}

export class Button extends React.Component<Props, {}> {
      static defaultProps = {
            disabled: false,
            handleButtonClick: () => {console.log('Button clicked')},
            typeOption: 'primary',
            sizeOption: 'normal',
            fullWidth: false,
      }

      render() {
            const {
                  children,
                  disabled,
                  handleButtonClick,
                  typeOption,
                  sizeOption,
                  className,
                  fullWidth,
            } = this.props

            return (
                  <div 
                        className={styles.Button}
                        onClick={!disabled ? handleButtonClick : (() => { console.log('Button was clicked but is disabled') })}
                  >
                        {children}
                  </div>
            )
      }
}
