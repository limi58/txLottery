const Reflux = require('Reflux');
const Action = require('../action/Action.js');
const Random = require('../random.js');

let Store = Reflux.createStore({
  selected: [],
  listenables: [Action],
  onClickSelect: function (model) {
    // 选中已有元素
    // console.log(this.selected)
    let position = this.selected.indexOf(model);
    if(position > -1){
      this.selected.splice(position, 1);
      this.trigger(this.selected);
      return;
    }
    // 超过或等于5个元素
    if(this.selected.length >= 5){
      return false;
    }else{
      this.selected.push(model);
      this.trigger(this.selected);
    }
  },
  onRandom: function(){
    let numberArr = ['01','02','03','04','05','06','07','08','09','10','11'];
    // 2-5
    let selectNumber = Random(2, 6);
    let selectValue = 0;
    this.selected=[];
    for(let i = 0;i < selectNumber;i++){
      // 1-11
      selectValue = Random(1,12);
      this.selected.push(numberArr[selectValue - 1]);
    }
    this.trigger(this.selected)
  }
});

module.exports = Store;