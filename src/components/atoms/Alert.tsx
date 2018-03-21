import * as React from 'react'
import './Alert.css'

interface Props {
      visible: boolean
      children: React.ReactNode

      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      dismissable?: boolean
      className?: string
      handleClick?: React.MouseEventHandler<HTMLElement>
}

export class Alert extends React.Component<Props, {}> {
      static defaultProps = {
            visible: true,
            typeOption: 'primary',
            dismissable: false,
            handleClick: () => {console.log('Alert was clicked')}
      }

      render() {
            return (
                  <div 
                        className={`Alert
                              ${this.props.typeOption}
                        `}
                        onClick={this.props.handleClick}
                  >
                        {this.props.children}
            
                        {this.props.dismissable &&
                              <button
                                    type='button'
                                    onClick={() => {}}
                              >
                                    ×
                              </button>
                        }
                  </div>
            )
      }
}
