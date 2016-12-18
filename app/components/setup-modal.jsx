const React = require('react');

var Modal = require('react-modal');

const modalStyle = {
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, .75)'
    },
    content: {
        position: 'absolute',
        overflow: 'visible',
        borderRadius: '6px',
        padding: 0,
        top: '15%',
        bottom: '5%',
        left: '5%',
        right: '5%',
        background: '#fcfcfc'
    }
};

class SetupModalComponent extends React.Component {
    render() {
        const {
            ...componentProps
        } = this.props;
        return (
            <Modal
                isOpen={this.props.visible}
                onRequestClose={this.props.closeModal}
                style={modalStyle}
            >
                <h2 ref="subtitle">Hello</h2>
            </Modal>
        )

    }
}

module.exports = SetupModalComponent;
