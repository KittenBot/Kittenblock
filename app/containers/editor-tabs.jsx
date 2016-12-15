const bindAll = require('lodash.bindall');
const React = require('react');

const EditorTabsComponent = require('../components/editor-tabs.jsx');

class EditorTabs extends React.Component {
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
            <EditorTabsComponent
                showStage={this.props.showStage}
                {...props}
            />
        );
    }

}

module.exports = EditorTabs;
