import React = require('react')

interface Props {
      expanded: boolean

      handleClick?: React.MouseEventHandler<HTMLElement>
      className?: string
}

export const CollapseButton: React.StatelessComponent<Props> = (props) => (
      <div 
            className={props.className}
            onClick={props.handleClick}
      >
            {
                  props.expanded ? '\u2013' : '+'
            }
      </div>
)

CollapseButton.defaultProps = {
      handleClick: () => {},
}

// export const CollapseButton = styled(CollapseButton_preStyle)`

//       display: flex;
//       justify-content: center;
//       align-items: center;

//       width: 20px;
//       height: 20px;

//       background-color: ${colors.bgColor.button.secondary};
//       border-radius: 2px;

//       font-size: large;
//       line-height: 1;

//       font-weight: 500;
//       color: white;

//       cursor: pointer;
// `
