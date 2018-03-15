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
      CollapseButton,
} from './components/'

interface Props {
      className?: string
}

class App_preStyle extends React.Component<Props, {}> {
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
                        <CollapseButton 
                              expanded
                        />
                  </h1>
            )
      }
}

const App = styled(App_preStyle)`
      background-color: yellow;
`

export default hot(module)(App)
