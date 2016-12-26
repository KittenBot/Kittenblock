const React = require('react');
const greenFlagIcon = require('./greenflag.png');

const GreenFlagComponent = function (props) {
    const {
        active,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <img
            className="scratch-green-flag"
            src={greenFlagIcon}
            style={{
                position: 'absolute',
                top: 50,
                right: 50,
                height:25,
                width:25,
                // @todo Get real design here
                WebkitFilter: active ? 'saturate(200%) brightness(150%)' : 'none'
            }}
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};

GreenFlagComponent.propTypes = {
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string
};

GreenFlagComponent.defaultProps = {
    active: false,
    title: 'Go'
};

module.exports = GreenFlagComponent;
