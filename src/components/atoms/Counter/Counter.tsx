import * as React from 'react'
import * as s from './Counter.css'
import classNames = require('classnames')

interface Props {
      big?: boolean
}

interface State {
      count: number
}

export class Counter extends React.Component<Props, State> {      
      static defaultProps = {
            big: false,
      }

      interval: number
      
      constructor(props: Props) {
            super(props)
            this.state = {
                  count: 0
            }
      }

      componentDidMount() {
            this.interval = window.setInterval(
                  () => this.setState(prevState => ({ count: prevState.count + 1 })),
                  1000
            )
      }

      componentWillUnmount() {
            clearInterval(this.interval)
      }

      render() {
            const {
                  big,
            } = this.props

            const {
                  count,
            } = this.state

            return (
                  <span 
                        className={classNames(
                              s.Counter,
                              {
                                    [s.big]: big
                              }, 
                        )}
                  >
                        {count}
                  </span>
            )
      }
}
