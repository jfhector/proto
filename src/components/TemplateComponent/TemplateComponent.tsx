import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './TemplateComponent.css'

import {} from '../../sharedTypes'
import {} from '../../data/'
import {} from '../../assets/'
import {} from '../../components/'

interface Props {
    children: React.ReactNode
    prop: PropType
    optionalProp?: PropType
    someOptionalPropWithSomethingToRender: React.Node
    optionalPropOption?: 'possValue1' | 'possValue2' | 'possValue3' | 'possValue4'

    // Connecting the component
    appState: AppState
    actions: Actions
    refAssignmentFunctions: RefAssignmentFunctions

    // Instance-specific data extracted from appState upstream
    propOption: 
    optionalProp?: PropType

    // Instance-specific function extracted from actions upstream
    prop: PropType
    handleClick?: React.MouseEventHandler<HTMLElement>
    optionalProp?: PropType

    // Ref assignment function
    refAssignmentFunctionForSomeHtmlElement?: (element: HTMLElement) => void
}

export class TemplateComponent extends React.Component<Props, {}> {
    static defaultProps = {
        optionalProp?: defaultValue,
        optionalProp?: defaultValue,
        optionalPropOption: 'possValue1',
        someOptionalPropWithSomethingToRender: null,
        refAssignmentFunctionForSomeHtmlElement: undefined,
        handleButtonClick: () => { console.log('Button clicked') },
    }

    render() {
        const { props } = this

        return (
            <outerMostHtmlElement
                className={classNames(
                    styles.TemplateComponent,
                    styles.className,
                    styles[props.propOption!],
                    {
                        [styles.conditionallyAppliedClassName]: props.prop,
                        [styles.conditionallyAppliedClassName]: props.prop,
                    }
                )}
            >
                <div
                    className={classNames(
                        styles.className,
                        styles.className,
                    )}
                >
                    {props.prop}
                </div>
            </outerMostHtmlElement>
        )
    }
}
