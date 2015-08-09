const React = require('react');
const HistoryContentComponent = require('./HistoryContentComponent.jsx');
const HistoryFooterComponent = require('./HistoryFooterComponent.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="container historyWrapper">
        <HistoryContentComponent />
        <HistoryFooterComponent />
      </div>
    )
  }
})