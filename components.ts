
class Component {
    props: any;
constructor(props: object) {
this.props = props;
}

setState(fn) {
fn();
}
renderComp(fn: function) {

}
}


export {Component}
