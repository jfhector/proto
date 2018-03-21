import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../stylepresets'

interface Props {
      visible: boolean
      children: React.ReactNode

      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      dismissable?: boolean
      className?: string
      handleClick?: React.MouseEventHandler<HTMLElement>
}

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
                  case 'primary': return css`
                        color: ${colors.textColor.alert.primary};
                        background-color: ${colors.bgColor.alert.primary};
                        border: 1px solid ${colors.borderColor.alert.primary};                        
                  `
                  case 'secondary': return css`
                        color: ${colors.textColor.alert.secondary};
                        background-color: ${colors.bgColor.alert.secondary};
                        border: 1px solid ${colors.borderColor.alert.secondary};
                  `
                  case 'success': return css`
                        color: ${colors.textColor.alert.success};
                        background-color: ${colors.bgColor.alert.success};
                        border: 1px solid ${colors.borderColor.alert.success};
                  `
                  case 'danger': return css`
                        color: ${colors.textColor.alert.danger};
                        background-color: ${colors.bgColor.alert.danger};
                        border: 1px solid ${colors.borderColor.alert.danger};
                  `
                  case 'warning': return css`
                        color: ${colors.textColor.alert.warn};
                        background-color: ${colors.bgColor.alert.warn};
                        border: 1px solid ${colors.borderColor.alert.warn};
                  `
                  case 'info': return css`
                        color: ${colors.textColor.alert.info};
                        background-color: ${colors.bgColor.alert.info};
                        border: 1px solid ${colors.borderColor.alert.info};
                  `
                  case 'light': return css`
                        color: ${colors.textColor.alert.light};
                        background-color: ${colors.bgColor.alert.light};
                        border: 1px solid ${colors.borderColor.alert.light};
                  `
                  case 'dark': return css`
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
      typeOption: 'primary',
      dismissable: false,
      handleClick: () => {console.log('Alert was clicked')}
}