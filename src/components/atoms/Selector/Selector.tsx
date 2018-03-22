import * as React from 'react'
import './Selector.css'

interface Props {
      optionsArray: string[]
      value: string
      handleSelectorChange?: (newSelection: string) => void
}

export class Selector extends React.Component<Props, {}> {
      static defaultProps = {
            handleSelectorChange: () => {}
      }

      render() {
            const {
                  optionsArray,
                  value,
                  handleSelectorChange,
            } = this.props

            return (
                  <select 
                        className='Selector'
                        value={value}
                        onChange={(event) => handleSelectorChange(event.target.value)}
                  > 
                        {
                              optionsArray.map((arrayElement: string, index: number) => (
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
      }
}
