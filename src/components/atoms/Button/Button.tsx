import * as React from 'react'
import * as s from './Button.css'
import classNames = require('classnames')

const Button: React.SFC<{
      children: React.ReactNode
      disabled?: boolean
      handleButtonClick?: React.MouseEventHandler<HTMLElement>
      typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      sizeOption?: 'small' | 'medium' | 'large'
      fullWidth?: boolean      
}> = ({
      disabled = false,
      handleButtonClick = () => {console.log('Button clicked')},
      typeOption = 'primary',
      sizeOption = 'medium',
      fullWidth = false,
      children,
}) => (
      <button 
            className={classNames(
                  s.Button,
                  s[typeOption],
                  s[sizeOption],
                  {
                        [s.fullWidth]: fullWidth,
                        [s.disabled]: disabled,
                  }
            )}
            onClick={!disabled ? handleButtonClick : (() => { console.log('Button was clicked but is disabled') })}
      >
            {children}
      </button>
)

export { Button }

// interface Props {
//       children: React.ReactNode

//       disabled?: boolean
//       handleButtonClick?: React.MouseEventHandler<HTMLElement>
//       typeOption?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
//       sizeOption?: 'small' | 'medium' | 'large'
//       fullWidth?: boolean
// }

// export class Button extends React.Component<Props, {}> {
//       static defaultProps = {
//             disabled: false,
//             handleButtonClick: () => {console.log('Button clicked')},
//             typeOption: 'primary',
//             sizeOption: 'medium',
//             fullWidth: false,
//       }

//       render() {
//             const {
//                   children,
//                   disabled,
//                   handleButtonClick,
//                   typeOption,
//                   sizeOption,
//                   fullWidth,
//             } = this.props

//             return (
//                   <button 
//                         className={classNames(
//                               s.Button,
//                               s[typeOption],
//                               s[sizeOption],
//                               {
//                                     [s.fullWidth]: fullWidth,
//                                     [s.disabled]: disabled,
//                               }
//                         )}
//                         onClick={!disabled ? handleButtonClick : (() => { console.log('Button was clicked but is disabled') })}
//                   >
//                         {children}
//                   </button>
//             )
//       }
// }
