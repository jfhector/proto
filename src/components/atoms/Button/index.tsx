import * as React from 'react'
import './style.css'

class Props {
      children: React.ReactNode

      disabled?: boolean
      handleButtonClick?: React.MouseEventHandler<HTMLElement>
      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      sizeOption?: 'small' | 'normal' | 'large'
      className?: string
      fullWidth?: boolean
}

export const Button: React.StatelessComponent<Props> = (props) => (
      <div 
            className={`Button 
                  ${props.fullWidth && 'fullWidth'} 
                  ${props.typeOption} 
                  ${props.sizeOption}
                  ${props.disabled && 'disabled'}
            `}
            onClick={!props.disabled ? props.handleButtonClick : (() => {})}
      >
            {props.children}
      </div>

)

Button.defaultProps = {
      disabled: false,
      handleButtonClick: () => {console.log('Button clicked')},
      typeOption: 'primary',
      sizeOption: 'normal',
      fullWidth: false,
}
