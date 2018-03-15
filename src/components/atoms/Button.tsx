import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../stylepresets'

class Props {
      children: React.ReactNode

      disabled?: boolean
      handleButtonClick?: () => void
      type?: Button_types
      size?: Button_sizes
      className?: string
      fullWidth?: boolean
}
export enum Button_types { primary, secondary, success, danger, warning, info, light, dark }
export enum Button_sizes { normal, large, small }

const Button_preStyle: React.StatelessComponent<Props> = (props) => (
      <div 
            className={props.className}
            onClick={!props.disabled ? props.handleButtonClick : (() => {})}
      >
            {props.children}
      </div>

)

export const Button = styled(Button_preStyle)`

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 4px;
      font-size: medium;

      cursor: pointer;

      width: ${props => 
            props.fullWidth ?
                  '100%'
                  : 'max-content'
      };

      ${props => {
            switch (props.type) {
                  case Button_types.primary: return css`
                        background-color: ${colors.bgColor.button.primary};
                        color: white;
                  `
                  case Button_types.secondary: return css`
                        background-color: ${colors.bgColor.button.secondary};
                        color: white;
                  `
                  case Button_types.success: return css`
                        background-color: ${colors.bgColor.button.success};
                        color: white;
                  `
                  case Button_types.danger: return css`
                        background-color: ${colors.bgColor.button.danger};
                        color: white;
                  `
                  case Button_types.warning: return css`
                        background-color: ${colors.bgColor.button.warn};
                  `
                  case Button_types.info: return css`
                        background-color: ${colors.bgColor.button.info};
                        color: white;
                  `
                  case Button_types.light: return css`
                        background-color: ${colors.bgColor.button.light};
                  `
                  case Button_types.dark: return css`
                        background-color: ${colors.bgColor.button.dark};
                        color: white;
                  `
                  default: throw new Error('switch props.type: no switch case found')
            } 
      }}

      ${props => {
            switch (props.size) {
                  case Button_sizes.small: return css`
                        padding: 4px 8px;
                        line-height: 21px;                        
                  `
                  case Button_sizes.normal: return css`
                        padding: 6px 12px;
                        line-height: 24px;
                  `
                  case Button_sizes.large: return css`
                        padding: 8px 16px;
                        line-height: 30px;                        
                  `
                  default: throw new Error('props.size didn\'t match any switch statement')
            }
      }}

      ${props =>
            props.disabled && css`
                  background-color: ${colors.bgColor.button.disabled};
            `
      }
`

Button.defaultProps = {
      disabled: false,
      handleButtonClick: () => {console.log('Button clicked')},
      type: Button_types.primary,
      size: Button_sizes.normal,
      fullWidth: false,
}
