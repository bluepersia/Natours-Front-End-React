export default function effect(child, cb) {
    cb(child);

    if (!child.props.children)
        return;

    for (const child of (child.props.children.length >= 0 ? child.props.children : [child.props.children]))
        effect(child, cb);
}