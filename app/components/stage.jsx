const React = require('react');

class StageComponent extends React.Component {
    render () {
        const {
            canvasRef,
            width,
            height,
            ...props
        } = this.props;
        return (
            <canvas
                className="scratch-stage"
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 80,
                    left: 10,
                    width: width,
                    height: height,
                    borderRadius: 10
                }}
                {...props}
            />
        );
    }
}

StageComponent.propTypes = {
    canvasRef: React.PropTypes.func,
    height: React.PropTypes.number,
    width: React.PropTypes.number
};

StageComponent.defaultProps = {
    canvasRef: () => {},
    width: 480,
    height: 360
};

module.exports = StageComponent;
