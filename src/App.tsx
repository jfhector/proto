import * as React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import {
      Counter, 
      Button,
      Button_types,
      Button_sizes,
      Alert,
      Alert_types,
} from './components/'

interface AppProps {
      className?: string
}

class AppPreStyle extends React.Component<AppProps, {}> {
      render() {
            const { className } = this.props

            return (
                  <h1 className={className}>
                        Hello, world.<br/>
                        <Counter big />
                        <Button 
                              type={Button_types.light}
                              size={Button_sizes.large}
                        >
                              Hello!
                        </Button>
                        <Alert
                              visible
                              type={Alert_types.danger}
                        >
                              You did something wrong!
                        </Alert>
                  </h1>
            )
      }
}

const App = styled(AppPreStyle)`
      background-color: yellow;
`

export default hot(module)(App)
