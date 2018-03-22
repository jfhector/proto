import React = require('react')
import * as s from './CollapseButton.css'

interface Props {
      expanded?: boolean,
      handleClick?: React.MouseEventHandler<HTMLElement>,
}

export class CollapseButton extends React.Component<Props, {}> {
      static defaultProps = {
            handleClick: () => { console.log('CollapseButton clicked') },
            expanded: false,
      }

      render() {
            const {
                  expanded,
                  handleClick,
            } = this.props

            return (
                  <div 
                        className={[
                              s.CollapseButton
                        ].join(' ')}
                        onClick={handleClick}
                  >
                        {expanded ? '\u2013' : '+'}
                  </div>
            )
      }
}
