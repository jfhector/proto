import * as React from 'react'
import { CollapseButton } from '../..'
import * as s from './CollapsibleContentBoard.css'
import classNames = require('classnames')

const CollapsibleContentBoard: React.StatelessComponent<{
      title: string
      children: React.ReactNode
      expanded?: boolean
      rightNode?: JSX.Element
      rightNodeIsSticky?: boolean
      rightNodeIsHighlighted?: boolean
      handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>
}> = ({
      title,
      children,
      expanded = false,
      rightNode = null,
      rightNodeIsSticky = false,
      rightNodeIsHighlighted = false,
      handleCollapseButtonClick = () => { console.log('Button clicked') }
}) => (
      <div
            className={classNames(
                  s.CollapsibleContentBoard,
                  {
                        [s.expanded]: expanded,
                        [s.rightNodeIsSticky]: rightNodeIsSticky,
                        [s.rightNodeIsHighlighted]: rightNodeIsHighlighted,
                  }
            )}
      >
            <div
                  className={s.collapseButtonContainer}
            >
                  <CollapseButton
                        expanded={expanded}
                        handleClick={handleCollapseButtonClick}
                  />
            </div>

            <div 
                  className={s.title}
            >
                  {title}
            </div>

            {expanded &&
                  <div
                        className={s.rightNodeContainer}
                  >
                        {rightNode && 'Selected measure: '}
                        {rightNode}
                  </div>
            }

            {expanded &&
                  <div
                        className={s.childrenContainer}
                  >
                        {children}
                  </div>
            }
      </div>
)

export { CollapsibleContentBoard }