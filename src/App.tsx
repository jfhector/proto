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
import './App.css'
import { MeasureName } from './sharedTypes'

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
            const {
                  selectedSweet
            } = this.state

            return (
                  <div className='App'>
                        Hello, world.<br/>
                        <Counter />
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
                              typeOption='danger'
                        >
                              You did something wrong!
                        </Alert>
                        <CollapseButton 
                              expanded={false}
                        />
                        <Selector
                              value={selectedSweet}
                              optionsArray={[
                                    'Bonbon',
                                    'Pie',
                                    'Quiche',
                                    'Jambon'
                              ]}
                              handleSelectorChange={newSelection => this.setState({selectedSweet: newSelection})}  
                        />
                        <KpiTile
                              measure={'Sales units'}
                              selected
                              appState={this.state}
                              handleKpiTileClick={(measure: MeasureName) => {}}
                        />
                  </div>
            )
      }
}

export default hot(module)(App)
