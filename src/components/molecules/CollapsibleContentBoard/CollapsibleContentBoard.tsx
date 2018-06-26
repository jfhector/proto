import * as React from 'react'
import * as styles from './CollapsibleContentBoard.css'
import * as classNames from 'classnames'
import { CollapseButton } from '../../'

interface Props {
    title: string
    children: React.ReactNode
    headerIsSticky?: boolean
    rightNode?: React.ReactNode

    // Instance-specific data extracted from appState upstream
    expanded?: boolean
    headerHighlighted?: boolean
    
    // Instance-specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLDivElement>
    
    // Ref assignment
    refAssignmentFunctionforHeaderContainingDiv?: (element: HTMLDivElement) => void
}

export class CollapsibleContentBoard extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: false,
        rightNode: null,
        headerIsSticky: false,
        headerHighlighted: false,
        handleCollapseButtonClick: () => { console.log('Button clicked') },
        refAssignmentFunctionforHeaderContainingDiv: undefined,
    }

    render() {
        const { props } = this

        return (
            <div
                className={classNames(
                    styles.CollapsibleContentBoard,
                    {
                        [styles.expanded]: props.expanded,
                        [styles.headerIsSticky]: props.headerIsSticky,
                        [styles.headerHighlighted]: props.headerHighlighted
                    }
                )}
            >
                <div
                    className={styles.headerContainer}
                    ref={props.refAssignmentFunctionforHeaderContainingDiv}
                >
                    <div
                        className={styles.collapseButtonContainer}
                    >
                        <CollapseButton
                            expanded={props.expanded}
                            handleClick={props.handleCollapseButtonClick}
                        />
                    </div>

                    <div
                        className={styles.title}
                    >
                        {props.title}
                    </div>

                    <div
                        className={styles.rightNodeContainer}
                    >
                        {props.rightNode}
                    </div>
                </div>
                
                {props.expanded &&
                    <div
                        className={styles.childrenContainer}
                    >
                        {props.children}
                    </div>
                }
            </div>
        )
    }

}
