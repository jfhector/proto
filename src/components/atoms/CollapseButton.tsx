import React = require('react')
import styled from 'styled-components'
import { colors } from '../../stylepresets'

interface Props {
      expanded: boolean

      handleClick?: React.MouseEventHandler<HTMLElement>
      className?: string
}

const CollapseButton_preStyle: React.StatelessComponent<Props> = (props) => (
      <div 
            className={props.className}
            onClick={props.handleClick}
      >
            {
                  props.expanded ? '\u2013' : '+'
            }
      </div>
)

export const CollapseButton = styled(CollapseButton_preStyle)`

      display: flex;
      justify-content: center;
      align-items: center;

      width: 20px;
      height: 20px;

      background-color: ${colors.bgColor.button.secondary};
      border-radius: 2px;

      font-size: large;
      line-height: 1;

      font-weight: 500;
      color: white;

      cursor: pointer;
`

CollapseButton.defaultProps = {
      handleClick: () => {},
}