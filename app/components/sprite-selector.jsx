const React = require('react');
const bindAll = require('lodash.bindall');

class SpriteSelectorComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
        ]);
    }
    render() {
        const {
            onChange,
            sprites,
            value,
            openNewSprite,
            openNewCostume,
            openNewBackdrop,
            selectTarget,
            kb,
            ...componentProps
        } = this.props;
        var spriteList=[];
        var backdrops=[];
        var targetList = this.props.sprites.targetList;
        for (var i = 0; i < targetList.length; i += 1) {
            var sprite = targetList[i];
            if(sprite.name=='Stage' || sprite.name=='Background'){
                backdrops.push(<img className="sprite img-thumbnail"
                                     alt={sprite.name}
                                     value={sprite.name}
                                     id={sprite.id}
                                     key={sprite.id}
                                     src={this.props.kb.resourcemng.getSpriteSkin(sprite.id)}
                                     style={{width:70,height:70,border:this.props.sprites.editingTarget==sprite.id?'2px solid #179FD7':'none'}}
                                     onClick={selectTarget}
                />)
            }else{
                spriteList.push(<img className="sprite img-thumbnail"
                                     alt={sprite.name}
                                     value={sprite.name}
                                     id={sprite.id}
                                     key={sprite.id}
                                     src={this.props.kb.resourcemng.getSpriteSkin(sprite.id)}
                                     style={{width:70,height:70,border:this.props.sprites.editingTarget==sprite.id?'2px solid #179FD7':'none'}}
                                     onClick={selectTarget}
                />)
            }
        };
        return (
            <div>
            <div style={{
                position: 'absolute',
                top: 450,
                left: 10,
                width: 100,
                height: 450,
                backgroundColor: "#F9F9F9",
                borderRadius: 10
            }}>
                {backdrops}
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 450,
                    left: 115,
                    width: 375,
                    height: 450,
                    backgroundColor: "#F9F9F9",
                    borderRadius: 10
                }}
                {...componentProps}
            >
                <p>
                    <button onClick={openNewSprite}>New sprite</button>
                    <button onClick={openNewBackdrop}>New backdrop</button>
                </p>
                <div>
                    {spriteList}
                </div>
            </div>
            </div>
        );
    }
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
