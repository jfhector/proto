import React = require('react')
import { CollapseButton } from '../..'
import * as s from './CollapsibleContentBoard.css'
import classNames = require('classnames')

interface Props {
      title: string,
      children: React.ReactNode,
      rightNode?: JSX.Element,
      rightNodeIsSticky?: boolean,
      rightNodeIsHighlighted?: boolean,
      expanded?: boolean,
      handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>,
}

export class CollapsibleContentBoard extends React.Component<Props, {}> {
      static defaultProps = {
            expanded: false,
            handleCollapseButtonClick: () => { console.log('Button clicked') },
            rightNode: false,
            rightNodeIsSticky: false,
            rightNodeIsHighlighted: false,
      }

      render() {
            const {
                  title,
                  children,
                  rightNode,
                  rightNodeIsSticky,
                  rightNodeIsHighlighted,
                  expanded,
                  handleCollapseButtonClick,
            } = this.props

            return (
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
      }
}