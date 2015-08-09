const React = require('react');
const Reflux = require('Reflux');
const Action = require('./action/Action.js');
const HistoryStore = require('./store/HistoryStore.js');
const HistoryStatusStore = require('./store/HistoryStatusStore.js');

module.exports = React.createClass({
  getInitialState: function(){
    return {historyArr: [], isShowHistory: false}
  },
  mixins: [Reflux.connect(HistoryStore, 'historyArr'), Reflux.connect(HistoryStatusStore, 'historyStatus')],
  render: function(){
    

    let content = this.state.historyArr.map((data) => {
      return <SingleHistory historyObj = {data} /> 
    })
    return (
      <div className={"historyContent " + (this.state.historyStatus ? '' : 'hidden')}>
        {content}
      </div>
    )
  }
})


let SingleHistory = React.createClass({
  propTypes: {
    historyObj: React.PropTypes.object
  },
  render: function(){
    let id = this.props.historyObj.id,
      history1 = this.props.historyObj.list[0],
      history2 = this.props.historyObj.list[1],
      history3 = this.props.historyObj.list[2],
      history4 = this.props.historyObj.list[3],
      history5 = this.props.historyObj.list[4];

    return (
      <div className="singleHistory container">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-1"><div className="id text-center"><h6>{id}期</h6></div></div>
          <div className="col-xs-1"><h5>{history1}</h5></div>
          <div className="col-xs-1"><h5>{history2}</h5></div>
          <div className="col-xs-1"><h5>{history3}</h5></div>
          <div className="col-xs-1"><h5>{history4}</h5></div>
          <div className="col-xs-1"><h5>{history5}</h5></div>
        </div>
      </div>
    )
  }
})