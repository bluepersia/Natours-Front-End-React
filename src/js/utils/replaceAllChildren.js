import React from 'react';


export default function replaceAllChildren(children, cb) {
    return React.Children.map(children, child => {

        let childProps = child.props;
        if (React.isValidElement(child)) {
            childProps = cb(child);
        }
        if (childProps) {
            // String has no Prop
            childProps.children = replaceAllChildren(child.props.children, cb);
            return React.cloneElement(child, childProps);
        }
        return child;
    })
}