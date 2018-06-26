import * as React from 'react'
import * as styles from './CollapsibleContentModule.css'
import * as classNames from 'classnames'
import { CollapseButton } from '../..'

interface Props {
    title: string
    children: React.ReactNode
    
    // Instance specific data extracted from appState upstream
    expanded?: boolean
    
    // Instance specific function extracted from actions upstream
    handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>
}

export class CollapsibleContentModule extends React.Component<Props, {}> {
    static defaultProps = {
        expanded: true,
        handleCollapseButtonClick: () => { console.log('handleCollapseButtonClick') },
    }

    render() {
        const { props } = this

        return (
            <div
                className={classNames(
                    styles.CollapsibleContentModule,
                    {
                        [styles.expanded]: props.expanded,
                    }
                )}
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
