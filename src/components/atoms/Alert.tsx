import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../stylepresets'

interface Props {
      visible: boolean
      children: React.ReactNode

      typeOption?: Alert_typeOptions
      dismissable?: boolean
      className?: string
      handleClick?: React.MouseEventHandler<HTMLElement>
}
export enum Alert_typeOptions { Primary, Secondary, Success, Danger, Warning, Info, Light, Dark }

const AlertPreStyle: React.StatelessComponent<Props> = (props) => (
      <div 
            className={props.className}
            onClick={props.handleClick}
      >
            {props.children}

            {props.dismissable &&
                  <button
                        type='button'
                        onClick={() => {}}
                  >
                        ×
                  </button>
            }
      </div>

)

export const Alert = styled(AlertPreStyle)`

      padding: 12px 20px;
      margin: 16px 0;

      border-radius: 4px;

      font-size: medium;
      line-height: 24px;
      text-align: left;

      cursor: pointer;
      overflow: hidden;

      ${props => {
            switch (props.typeOption) {
                  case Alert_typeOptions.Primary: return css`
                        color: ${colors.textColor.alert.primary};
                        background-color: ${colors.bgColor.alert.primary};
                        border: 1px solid ${colors.borderColor.alert.primary};                        
                  `
                  case Alert_typeOptions.Secondary: return css`
                        color: ${colors.textColor.alert.secondary};
                        background-color: ${colors.bgColor.alert.secondary};
                        border: 1px solid ${colors.borderColor.alert.secondary};
                  `
                  case Alert_typeOptions.Success: return css`
                        color: ${colors.textColor.alert.success};
                        background-color: ${colors.bgColor.alert.success};
                        border: 1px solid ${colors.borderColor.alert.success};
                  `
                  case Alert_typeOptions.Danger: return css`
                        color: ${colors.textColor.alert.danger};
                        background-color: ${colors.bgColor.alert.danger};
                        border: 1px solid ${colors.borderColor.alert.danger};
                  `
                  case Alert_typeOptions.Warning: return css`
                        color: ${colors.textColor.alert.warn};
                        background-color: ${colors.bgColor.alert.warn};
                        border: 1px solid ${colors.borderColor.alert.warn};
                  `
                  case Alert_typeOptions.Info: return css`
                        color: ${colors.textColor.alert.info};
                        background-color: ${colors.bgColor.alert.info};
                        border: 1px solid ${colors.borderColor.alert.info};
                  `
                  case Alert_typeOptions.Light: return css`
                        color: ${colors.textColor.alert.light};
                        background-color: ${colors.bgColor.alert.light};
                        border: 1px solid ${colors.borderColor.alert.light};
                  `
                  case Alert_typeOptions.Dark: return css`
                        color: ${colors.textColor.alert.dark};
                        background-color: ${colors.bgColor.alert.dark};
                        border: 1px solid ${colors.borderColor.alert.dark};
                  `
                  default: throw new Error('switch props.type: no switch case found')
            }
      }}
`

Alert.defaultProps = {
      visible: true,
      typeOption: Alert_typeOptions.Primary,
      dismissable: false,
      handleClick: () => {console.log('Alert was clicked')}
}