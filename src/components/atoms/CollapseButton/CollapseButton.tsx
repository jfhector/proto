import React = require('react')
import * as s from './CollapseButton.css'

interface Props {
      expanded?: boolean
      handleClick?: React.MouseEventHandler<HTMLElement>
}

export class CollapseButton extends React.Component<Props, {}> {
      static defaultProps = {
            expanded: false,
            handleClick: () => { console.log('CollapseButton clicked') },            
      }

      render() {
            const {
                  expanded,
                  handleClick,
            } = this.props

            return (
                  <div 
                        className={s.CollapseButton}
                        onClick={handleClick}
                  >
                        {expanded ? '\u2013' : '+'}
                  </div>                  
            )
      }
}
