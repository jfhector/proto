import React = require('react')
import './CollapseButton.css'

interface Props {
      expanded: boolean
      handleClick?: React.MouseEventHandler<HTMLElement>
}

export class CollapseButton extends React.Component<Props, {}> {
      static defaultProps = {
            handleClick: () => { console.log('CollapseButton clicked') },
      }

      render() {
            const {
                  expanded,
                  handleClick,
            } = this.props

            return (
                  <div 
                        className='CollapseButton'
                        onClick={handleClick}
                  >
                        {expanded ? '\u2013' : '+'}
                  </div>
            )
      }
}
