import * as React from 'react'
import './Button.css'

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
            return (
                  <div 
                        className={`Button 
                              ${this.props.fullWidth && 'fullWidth'} 
                              ${this.props.typeOption} 
                              ${this.props.sizeOption}
                              ${this.props.disabled && 'disabled'}
                        `}
                        onClick={!this.props.disabled ? this.props.handleButtonClick : (() => {})}
                  >
                        {this.props.children}
                  </div>
            )
      }
}
