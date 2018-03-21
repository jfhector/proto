import React = require('react')
import './CollapseButton.css'

interface Props {
      expanded: boolean
      handleClick?: React.MouseEventHandler<HTMLElement>
}

export class CollapseButton extends React.Component<Props, {}> {
      static defaultProps = {
            handleClick: () => {},
      }

      render() {
            return (
                  <div 
                        className='CollapseButton'
                        onClick={this.props.handleClick}
                  >
                        {
                              this.props.expanded ? '\u2013' : '+'
                        }
                  </div>
            )
      }
}
