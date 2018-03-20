import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../stylepresets'

interface Props {
      optionsArray: string[]
      value: string
      className?: string
      handleSelectorChange?: (newSelection: string) => void
}

const Selector_preStyle: React.StatelessComponent<Props> = (props: Props) => (
      <select 
            className={props.className}
            value={props.value}
            onChange={
                  (event) => props.handleSelectorChange(event.target.value)
            }
      > 
            {
                  props.optionsArray.map(
                        (arrayElement: string, index: number) => (
                              <option
                                    key={arrayElement + String(index)}
                                    value={arrayElement}
                              >
                                    {arrayElement}
                              </option>
                        )
                  )
            }
      </select>
)

export const Selector = styled(Selector_preStyle)`
      width: 230px;
      height: 30px;
      font-size: small;
      background-color: ${colors.bgColor.background.fbfbfc}
`

Selector.defaultProps = {
      handleSelectorChange: () => {}
}
