const React = require('react');
const Reflux = require('Reflux');
const SelectStore = require('./store/SelectStore.js');
const Action = require('./action/Action.js');

module.exports = React.createClass({
  mixins: [Reflux.connect(SelectStore, 'selected')],
  getInitialState: function(){
    return {selected: []}
  },
  render: function(){
    return(
      <div className="container footerWrapper">
        <FooterTop selected={this.state.selected} />
        <FooterContent selected={this.state.selected} />
      </div>
    )
  }
})

let FooterTop = React.createClass({
  propsType: {
    selected: React.PropTypes.array
  },
  render: function(){
    let text = '';
    if(this.props.selected.length >= 2){
      text = <h6>猜中任意三个开奖号码，单注奖<span className="red">26元</span>，再加奖<span className="red">4元</span></h6>
    }else{
      text = <h6>至少选2个球，猜中任意2个，中13元</h6>
    }
    return (
      <div className="footerTop lightGrey text-center">
        {text}
      </div>
    )
  }
})

let FooterContent = React.createClass({
  clickRandom: function(){
    Action.random();
  },
  clickSubmit: function(){
    let text = '';
    if(this.props.selected.length < 2){
      alert("至少选择2个球哟")
    }else{
      alert("别急哟，明天才开始哟")
    }
    
  },

  render: function(){
    let text = '';
    if(this.props.selected.length < 2){
      text = "至少选择2个球"
    }else{
      text = "投注"
    }

    return (
      <div className="footerContent row text-center">
        <div className="col-xs-4">
          <div onClick={this.clickRandom} className="randomBtn red pointer"><h5>摇一摇<br />随机一注</h5></div>
        </div>
        <div className="col-xs-8 ">
          <div onClick={this.clickSubmit} className="submitBtn pointer"><h5>{text}</h5></div>
        </div>
      </div>
    )
  }
})