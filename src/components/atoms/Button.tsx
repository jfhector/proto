import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../stylepresets'

class Props {
      children: React.ReactNode

      disabled?: boolean
      handleButtonClick?: React.MouseEventHandler<HTMLElement>
      typeOption?: Button_typeOptions
      sizeOption?: Button_sizeOptions
      className?: string
      fullWidth?: boolean
}
export type Button_typeOptions = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export enum Button_sizeOptions { Normal, Large, Small }

const Button_preStyle: React.StatelessComponent<Props> = (props: Props) => (
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
            switch (props.typeOption) {
                  case 'primary': return css`
                        background-color: ${colors.bgColor.button.primary};
                        color: white;
                  `
                  case 'secondary': return css`
                        background-color: ${colors.bgColor.button.secondary};
                        color: white;
                  `
                  case 'success': return css`
                        background-color: ${colors.bgColor.button.success};
                        color: white;
                  `
                  case 'danger': return css`
                        background-color: ${colors.bgColor.button.danger};
                        color: white;
                  `
                  case 'warning': return css`
                        background-color: ${colors.bgColor.button.warn};
                  `
                  case 'info': return css`
                        background-color: ${colors.bgColor.button.info};
                        color: white;
                  `
                  case 'light': return css`
                        background-color: ${colors.bgColor.button.light};
                  `
                  case 'dark': return css`
                        background-color: ${colors.bgColor.button.dark};
                        color: white;
                  `
                  default: throw new Error('switch props.type: no switch case found')
            } 
      }}

      ${props => {
            switch (props.sizeOption) {
                  case Button_sizeOptions.Small: return css`
                        padding: 4px 8px;
                        line-height: 21px;                        
                  `
                  case Button_sizeOptions.Normal: return css`
                        padding: 6px 12px;
                        line-height: 24px;
                  `
                  case Button_sizeOptions.Large: return css`
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
      typeOption: 'primary',
      sizeOption: Button_sizeOptions.Normal,
      fullWidth: false,
}
