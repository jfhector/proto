import React = require('react')
import * as s from './CollapseButton.css'

const CollapseButton: React.StatelessComponent<{
      expanded?: boolean
      handleClick?: React.MouseEventHandler<HTMLElement>
}> = ({
            expanded = false,
            handleClick = () => { console.log('CollapseButton clicked') },
}) => (
      <div 
            className={s.CollapseButton}
            onClick={handleClick}
      >
            {expanded ? '\u2013' : '+'}
      </div>
)

export { CollapseButton }
