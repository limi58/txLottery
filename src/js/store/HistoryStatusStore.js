const Reflux = require('Reflux');
const Action = require('../action/Action.js');

module.exports = Reflux.createStore({
  listenables: [Action],
  onHideHistory: function (model) {
    this.trigger(false)
  },
  onShowHistory: function(){
    this.trigger(true)
  }
})