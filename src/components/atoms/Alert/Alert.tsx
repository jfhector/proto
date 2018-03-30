import * as React from 'react'
import * as s from './Alert.css'
import classNames = require('classnames')

const Alert: React.StatelessComponent<{
      visible: boolean
      children: React.ReactNode
      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      dismissable?: boolean
      handleClick?: React.MouseEventHandler<HTMLElement>
}> = ({
      visible = true,
      children,
      typeOption = 'primary',
      dismissable = false,
      handleClick = () => {console.log('Alert was clicked')},
}) => (
      <div 
            className={classNames(
                  s.Alert,
                  s[typeOption],
                  {
                        [s.visible]: visible
                  }
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

export { Alert }
