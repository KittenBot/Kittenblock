const React = require('react');
import { AlertList  } from "react-bs-notifier";

class GUIComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            position: "top-right",
            alerts: [/*{
                id: 1022,
                type: 'info',
                headline: `Hello`,
                message: "hello notify"
            }*/],
            alertTimeout: 2000,
        };
    }
    onAlertDismissed(alert) {
        const alerts = this.state.alerts;

        // find the index of the alert that was dismissed
        const idx = alerts.indexOf(alert);

        if (idx >= 0) {
            this.setState({
                // remove the alert from the array
                alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
            });
        }
    }
    render() {
        const {
            children,
            ...componentProps
        } =  this.props;
        return (
            <div
                className="scratch-gui"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
                {...componentProps}
            >
                {children}
                <AlertList
                    position='top-left'
                    alerts={this.state.alerts}
                    timeout={this.state.alertTimeout}
                    onDismiss={this.onAlertDismissed.bind(this)}
                />
            </div>

        );
    }
};

GUIComponent.propTypes = {
    children: React.PropTypes.node
};

module.exports = GUIComponent;
