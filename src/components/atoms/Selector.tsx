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
            return (
                  <select 
                        className='Selector'
                        value={this.props.value}
                        onChange={
                              (event) => this.props.handleSelectorChange(event.target.value)
                        }
                  > 
                        {
                              this.props.optionsArray.map(
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
      }
}
