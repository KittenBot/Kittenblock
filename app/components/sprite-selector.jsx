const React = require('react');

const SpriteSelectorComponent = function (props) {
    const {
        onChange,
        sprites,
        value,
        openNewSprite,
        openNewCostume,
        openNewBackdrop,
        ...componentProps
    } = props;
    return (
        <div
            style={{
                position: 'absolute',
                top: 450,
                left: 10,
                width:480,
                height: 450,
                backgroundColor:"#F9F9F9",
                borderRadius: 10
            }}
            {...componentProps}
        >
            <div>
                {sprites.map(sprite => (
                    <img className="sprite img-thumbnail"
                        alt={sprite.name}
                        value={sprite.name}
                         key={sprite.id}
                    />
                ))}
            </div>
            <p>
                <button onClick={openNewSprite}>New sprite</button>
                <button onClick={openNewCostume}>New costume</button>
                <button onClick={openNewBackdrop}>New backdrop</button>
            </p>
        </div>
    );
};

SpriteSelectorComponent.propTypes = {
    onChange: React.PropTypes.func,
    openNewBackdrop: React.PropTypes.func,
    openNewCostume: React.PropTypes.func,
    openNewSprite: React.PropTypes.func,
    sprites: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.string,
            name: React.PropTypes.string
        })
    ),
    value: React.PropTypes.arrayOf(React.PropTypes.string)
};

module.exports = SpriteSelectorComponent;
