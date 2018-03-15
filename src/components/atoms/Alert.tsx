import * as React from 'react'
import styled, { css } from 'styled-components';
import { colors } from '../../stylepresets';

interface Props {
      visible: boolean
      children: React.ReactNode

      type?: Alert_types
      dismissable?: boolean
      className?: string
      onClickHandler?: () => void
}
export enum Alert_types { 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' }

const AlertPreStyle: React.StatelessComponent<Props> = (props) => (
      <div 
            className={props.className}
            onClick={props.onClickHandler}
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
            switch (props.type) {
                  case Alert_types.primary: return css`
                        color: ${colors.textColor.alert.primary};
                        background-color: ${colors.bgColor.alert.primary};
                        border: 1px solid ${colors.borderColor.alert.primary};                        
                  `
                  case Alert_types.secondary: return css`
                        color: ${colors.textColor.alert.secondary};
                        background-color: ${colors.bgColor.alert.secondary};
                        border: 1px solid ${colors.borderColor.alert.secondary};
                  `
                  case Alert_types.success: return css`
                        color: ${colors.textColor.alert.success};
                        background-color: ${colors.bgColor.alert.success};
                        border: 1px solid ${colors.borderColor.alert.success};
                  `
                  case Alert_types.danger: return css`
                        color: ${colors.textColor.alert.danger};
                        background-color: ${colors.bgColor.alert.danger};
                        border: 1px solid ${colors.borderColor.alert.danger};
                  `
                  case Alert_types.warning: return css`
                        color: ${colors.textColor.alert.warn};
                        background-color: ${colors.bgColor.alert.warn};
                        border: 1px solid ${colors.borderColor.alert.warn};
                  `
                  case Alert_types.info: return css`
                        color: ${colors.textColor.alert.info};
                        background-color: ${colors.bgColor.alert.info};
                        border: 1px solid ${colors.borderColor.alert.info};
                  `
                  case Alert_types.light: return css`
                        color: ${colors.textColor.alert.light};
                        background-color: ${colors.bgColor.alert.light};
                        border: 1px solid ${colors.borderColor.alert.light};
                  `
                  case Alert_types.dark: return css`
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
      type: Alert_types.primary,
      dismissable: false,
      onClickHandler: () => {console.log('Alert was clicked')}
}