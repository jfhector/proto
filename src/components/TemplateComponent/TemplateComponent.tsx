import * as React from 'react'
import * as classNames from 'classnames'
import * as s from './TemplateComponent.css'

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

    // Instance-specific data extracted from appState upstream
    propOption: 
    optionalProp?: PropType

    // Instance-specific function extracted from actions upstream
    prop: PropType
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
    }

    render() {
        const { props } = this

        return (
            <outerMostHtmlElement
                className={classNames(
                    s.TemplateComponent,
                    s.className,
                    {
                        [s.conditionallyAppliedClassName]: props.prop,
                        [s.conditionallyAppliedClassName]: props.prop,
                    }
                )}
            >
                <div
                    className={classNames(
                        s.className,
                        s.className,
                    )}
                >
                    {props.prop}
                </div>
            </outerMostHtmlElement>
        )
    }
}
