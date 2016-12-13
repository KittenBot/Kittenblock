const bindAll = require('lodash.bindall');
const React = require('react');

const HeaderBarComponent = require('../components/header-bar.jsx');

class HeaderBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            targets: {
                targetList: []
            }
        };
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;
        return (
            <HeaderBarComponent
                {...props}
            />
        );
    }

}

module.exports = HeaderBar;


