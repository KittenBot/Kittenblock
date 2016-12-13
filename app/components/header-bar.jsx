const React = require('react');
const logo = require('../media/logo.png');

const HeaderBarComponent = function (props) {
    const {
        ...componentProps
    } = props;
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#0099CC',
                height: '45px'
            }}
            {...componentProps}
        >
            <a><img src={logo} alt="..." className="img-rounded" style={{height: '35px'}} id="kittenlogo" /></a>
        </div>
    );
};


module.exports = HeaderBarComponent;
