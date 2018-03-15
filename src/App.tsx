import * as React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import { Counter } from './components/'

interface AppProps {
      className?: string
}

class App_preStyle extends React.Component<AppProps, {}> {
      render() {
            const { className } = this.props

            return (
                  <h1 className={className}>
                        Hello, world.<br/>
                        <Counter big />
                  </h1>
            )
      }
}

const App = styled(App_preStyle)`
      background-color: yellow;
`

export default hot(module)(App)
