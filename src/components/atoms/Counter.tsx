import * as React from 'react'
import './Counter.css'

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
            return (
                  <span 
                        className={`Counter
                              ${this.props.big && 'big'}
                        `}
                  >
                        {this.state.count}
                  </span>
            )
      }
}
