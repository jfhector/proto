import * as React from 'react'
import { hot } from 'react-hot-loader'
import {
      Counter, 
      Button,
      Alert,
      CollapseButton,
      Selector,
} from './components/'
import { KpiTile } from './components/molecules/KpiTile'
import { MeasuresForKpiTiles } from './data'
import './App.css'

interface Props {}

export interface AppState {
      selectedSweet: string
}

const initialState: AppState = {
      selectedSweet: 'Quiche'
}

class App extends React.Component<Props, AppState> {
      constructor(props: Props) {
            super(props)
            this.state = initialState
      }

      render() {
            return (
                  <div className='App'>
                        Hello, world.<br/>
                        <Counter big />
                        <Button 
                              typeOption='primary'
                              sizeOption='small'
                              disabled
                              fullWidth
                        >
                              Hello!
                        </Button>
                        <Alert
                              visible
                              typeOption='info'
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
                        <KpiTile
                              measure={'Customers'}
                              selected
                              appState={this.state}
                              handleKpiTileClick={(measure: MeasuresForKpiTiles) => {}}
                        />
                  </div>
            )
      }
}

export default hot(module)(App)
