const React = require('react');
const Reflux = require('Reflux');
const Action = require('./action/Action.js');
const SelectStore = require('./store/SelectStore.js');
const HistoryStatusStore = require('./store/HistoryStatusStore.js');

module.exports = React.createClass({
  mixins: [Reflux.connect(SelectStore, 'selected'), Reflux.connect(HistoryStatusStore, 'historyStatus')],
  getInitialState: function(){
    return {selected: []}
  },
  render: function(){

    return(
      <div id="selectWrapper" className={"container selectWrapper " + (this.state.historyStatus ? 'hidden' : '')}> 
        <div className="row">
          <SelectList selected={this.state.selected} selectValueArr={['01','02','03','04','05','06']} />
        </div>
        <div className="row">
          <SelectList selected={this.state.selected} selectValueArr={['07','08','09','10','11']} />
        </div>
      </div>
    )
  }
})

let SelectList = React.createClass({
  propTypes: {
    selectValueArr: React.PropTypes.array,
    selected: React.PropTypes.array
  },
  clickSelect: function(data){
    Action.clickSelect(data)
  },
  render: function(){
    let selectList = this.props.selectValueArr.map((data) => {
      return(
        <div className="col-xs-2">
          <div onClick={this.clickSelect.bind(this, data)} className={"select " + (this.props.selected.some((ele)=>{return ele === data}) ? 'selected' : '')}><h4>{data}</h4></div>
        </div>
      ) 
    });

    return(
      <div>
        {selectList}
      </div>
    )
  }
})
