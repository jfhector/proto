import * as React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import {
      Counter, 
      Button,
      Button_typeOptions,
      Button_sizeOptions,
      Alert,
      Alert_typeOptions,
      CollapseButton,
      Selector,
} from './components/'
import { KpiTile_preStyle } from './components/molecules/KpiTile'
import { MeasuresForKpiTiles } from './data'

interface Props {
      className?: string
}

export interface AppState {
      selectedSweet: string
}

const initialState: AppState = {
      selectedSweet: 'Quiche'
}

class App_preStyle extends React.Component<Props, AppState> {
      constructor(props: Props) {
            super(props)
            this.state = initialState
      }

      render() {
            const { className } = this.props

            return (
                  <h1 className={className}>
                        Hello, world.<br/>
                        <Counter big />
                        <Button 
                              typeOption={Button_typeOptions.Success}
                              sizeOption={Button_sizeOptions.Large}
                        >
                              Hello!
                        </Button>
                        <Alert
                              visible
                              typeOption={Alert_typeOptions.Success}
                        >
                              You did something wrong!
                        </Alert>
                        <CollapseButton 
                              expanded={false}
                        />
                        <Selector
                              value={this.state.selectedSweet}
                              optionsArray={[
                                    'Bonbon',
                                    'Pie',
                                    'Quiche',
                                    'Jambon'
                              ]}
                              handleSelectorChange={newSelection => this.setState({selectedSweet: newSelection})}  
                        />
                        <KpiTile_preStyle
                              measure={'Customers'}
                              selected
                              appState={this.state}
                              handleKpiTileClick={(measure: MeasuresForKpiTiles) => {}}
                        />
                  </h1>
            )
      }
}

const App = styled(App_preStyle)`
      background-color: yellow;
`

export default hot(module)(App)
