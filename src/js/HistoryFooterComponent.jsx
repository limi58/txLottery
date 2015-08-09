const React = require('react');
const Reflux = require('reflux');
const HistoryStatusStore = require('./store/HistoryStatusStore.js');

module.exports = React.createClass({
  mixins: [Reflux.connect(HistoryStatusStore, 'historyStatus')],
  getInitialState: function(){
    return {historyStatus: false, hour: 9, minute: 59}
  },
  componentDidMount: function(){
    let clock = setInterval(()=>{
      this.setState({minute: this.state.minute - 1})
      if(this.state.hour === 0)this.setState({hour: 0})
      if(this.state.minute === 0)this.setState({hour: this.state.hour - 1, minute: 59})
    },1000)
  },
  render: function(){
    
    return (
        <div className="row historyFooter" id="historyFooter">
          <div className="col-xs-6">
            <h5><span>距离7期截止</span><b>{this.state.hour}:{this.state.minute}</b></h5>
          </div>
          <div className="col-xs-6 text-right">
            <h5 className="lightGrey">{this.state.historyStatus ? '上滑收起' : '下拉历史开奖'}</h5>
          </div>
        </div>
    )
  }
})