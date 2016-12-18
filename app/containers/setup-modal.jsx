const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

class SetupModal  extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {
            kb,
            ...props
        } = this.props;
        return (
            <div></div>
        );
    }
}


SetupModal.propTypes = {
    visible: React.PropTypes.bool,
    kb: React.PropTypes.instanceOf(KittenBlock)
};


module.exports = SetupModal;

