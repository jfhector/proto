import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../stylepresets'

interface CounterProps {
      className?: string
      big?: boolean
}

class CounterPreStyle extends React.Component<CounterProps, {
      count: number
}> {
      interval: number

      constructor(props: CounterProps) {
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
            const { className } = this.props

            return (
                  <span className={className}>
                        {this.state.count}
                  </span>
            )
      }
}

export const Counter = styled(CounterPreStyle)`
      color: ${colors.textColor.positive};

      ${(props: CounterProps) => props.big && css`
            font-size: 72px;
            font-weight: 700;
      `}
`
