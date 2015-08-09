const Reflux = require('Reflux');
const Action = require('../action/Action.js');

module.exports = Reflux.createStore({
  selected: [
    {id: 6, list: ['01','05','09','10','11']},
    {id: 5, list: ['02','05','07','10','11']},
    {id: 4, list: ['02','03','06','10','11']},
    {id: 3, list: ['02','04','05','10','11']},
    {id: 2, list: ['02','05','09','10','11']},
    {id: 1, list: ['01','05','06','10','11']}
  ],
  listenables: [Action],
  onGetHistory: function (model) {
    this.trigger(this.selected)
  }
})