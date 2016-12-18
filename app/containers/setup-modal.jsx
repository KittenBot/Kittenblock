const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

const SetupModalComponent = require('../components/setup-modal.jsx');

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
            <SetupModalComponent
                visible={this.props.visible}
                closeModal={this.props.onRequestClose}
            />
        );
    }
}


SetupModal.propTypes = {
    visible: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func,
    kb: React.PropTypes.instanceOf(KittenBlock)
};


module.exports = SetupModal;

