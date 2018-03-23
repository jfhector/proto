import * as React from 'react'
import * as s from './Alert.css'
import classNames = require('classnames')

interface Props {
      visible: boolean
      children: React.ReactNode

      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      dismissable?: boolean
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
            const {
                  visible,
                  children,
                  typeOption,
                  dismissable,
                  handleClick
            } = this.props

            return (
                  <div 
                        className={classNames(
                              s.Alert,
                              s[typeOption]
                        )}
                        onClick={handleClick}
                  >
                        {children}
            
                        {dismissable &&
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
