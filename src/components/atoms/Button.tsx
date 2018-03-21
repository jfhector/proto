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

export const Button: React.StatelessComponent<Props> = (props) => (
      <div 
            className={`default ${props.fullWidth && 'fullWidth'} ${props.typeOption}`}
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

// export const Button = styled(Button_preStyle)`

//       display: flex;
//       justify-content: center;
//       align-items: center;

//       border-radius: 4px;
//       font-size: medium;

//       cursor: pointer;

//       width: ${props => 
//             props.fullWidth ?
//                   '100%'
//                   : 'max-content'
//       };

//       ${props => {
//             switch (props.typeOption) {
//                   case 'primary': return css`
//                         background-color: ${colors.bgColor.button.primary};
//                         color: white;
//                   `
//                   case 'secondary': return css`
//                         background-color: ${colors.bgColor.button.secondary};
//                         color: white;
//                   `
//                   case 'success': return css`
//                         background-color: ${colors.bgColor.button.success};
//                         color: white;
//                   `
//                   case 'danger': return css`
//                         background-color: ${colors.bgColor.button.danger};
//                         color: white;
//                   `
//                   case 'warning': return css`
//                         background-color: ${colors.bgColor.button.warn};
//                   `
//                   case 'info': return css`
//                         background-color: ${colors.bgColor.button.info};
//                         color: white;
//                   `
//                   case 'light': return css`
//                         background-color: ${colors.bgColor.button.light};
//                   `
//                   case 'dark': return css`
//                         background-color: ${colors.bgColor.button.dark};
//                         color: white;
//                   `
//                   default: throw new Error('switch props.type: no switch case found')
//             } 
//       }}

//       ${props => {
//             switch (props.sizeOption) {
//                   case 'small': return css`
//                         padding: 4px 8px;
//                         line-height: 21px;                        
//                   `
//                   case 'normal': return css`
//                         padding: 6px 12px;
//                         line-height: 24px;
//                   `
//                   case 'large': return css`
//                         padding: 8px 16px;
//                         line-height: 30px;                        
//                   `
//                   default: throw new Error('props.size didn\'t match any switch statement')
//             }
//       }}

//       ${props =>
//             props.disabled && css`
//                   background-color: ${colors.bgColor.button.disabled};
//             `
//       }
// `
