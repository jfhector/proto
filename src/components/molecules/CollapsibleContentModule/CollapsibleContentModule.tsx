import * as React from 'react'
import { FiltersSet } from '../../../sharedTypes'
import './CollapsibleContentModule.css'
import { CollapseButton } from '../..'

interface Props {
      title: string,
      children: React.ReactNode,
      expanded?: boolean,
      displayedFilters?: FiltersSet,
      handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>,
}

export class CollapsibleContentModule extends React.Component<Props, {}> {
      static defaultProps = {
            expanded: false,
            handleCollapseButtonClick: () => {console.log('handleCollapseButtonClick')},
      }

      render() {
            const {
                  title,
                  children,
                  expanded,
                  displayedFilters: {
                        duration,
                        dates,
                        comparison,
                        subcategory,
                        region,
                        storeFormat,
                        customerSegment,
                  },
                  handleCollapseButtonClick,
            } = this.props

            return (
                  <div
                        className={`CollapsibleContentModule ${expanded ? 'expanded' : ''}`}
                  >

                        <div
                              className='collapsibleButtonContainer'
                        >
                              <CollapseButton 
                                    expanded={expanded}
                                    handleClick={handleCollapseButtonClick}
                              />
                              
                        </div>

                        <div
                              className='title'
                        >
                              {title}
                        </div>

                        {expanded &&
                              <div 
                                    className='subTitle'
                              >
                                    {`${duration} • ${dates} ${comparison}`}
                                    <br />
                                    {`${subcategory} • ${region} • ${storeFormat} • ${customerSegment}`}
                              </div>      
                        }

                        {expanded &&
                              <div
                                    className='childrenContainer'
                              >
                                    {children}
                              </div>
                        }

                  </div>
            )
      }
}