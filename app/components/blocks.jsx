const React = require('react');

class BlocksComponent extends React.Component {
    render () {
        const {
            componentRef,
            ...props
        } = this.props;
        return (
            <div
                className="scratch-blocks"
                ref={componentRef}
                style={{
                    position: 'absolute',
                    top: 80,
                    right: 0,
                    bottom: 0,
                    left: 500
                }}
                {...props}
            />
        );
    }
}

BlocksComponent.propTypes = {
    componentRef: React.PropTypes.func
};

module.exports = BlocksComponent;
