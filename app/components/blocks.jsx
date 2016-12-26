const React = require('react');

class BlocksComponent extends React.Component {
    render () {
        const {
            componentRef,
            showStage,
            ...props
        } = this.props;
        var leftPos=showStage?500:0;

        return (
            <div
                className="scratch-blocks"
                ref={componentRef}
                style={{
                    position: 'absolute',
                    top: 80,
                    right: 0,
                    bottom: 0,
                    left: leftPos
                }}
                {...props}
            />
        );
    }
}

BlocksComponent.propTypes = {
    showStage: React.PropTypes.bool,
    componentRef: React.PropTypes.func
};

module.exports = BlocksComponent;
