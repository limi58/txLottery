const React = require('react');
const NavComponent = require('./NavComponent.jsx');
const FooterComponent = require('./FooterComponent.jsx');
const SelectComponent = require('./SelectComponent.jsx');
const HistoryComponent = require('./HistoryComponent.jsx');
const Hammer = require('hammerjs');
const Action = require('./action/Action.js');
const Shake = require('shake.js');

let App = React.createClass({
  componentDidMount: function(){
    // 取消loding
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('loading'))
    // 摇动随机事件
    var shakeEvent = new Shake({
        threshold: 5,
        timeout: 500
    });
    shakeEvent.start();
    window.addEventListener('shake', () => {
      Action.random();
    }, false);
    // 阻止微信下滑事件
    window.addEventListener('touchmove',(e) => {
      e.preventDefault();
    })
    // 上滑下滑显示历史事件
    let hammertime = new Hammer(document.body);
    hammertime.on('pandown swipedown', function(ev) {
      Action.getHistory();
      Action.showHistory();
    });
    hammertime.on('panup swipeup', function(ev) {
      Action.hideHistory();
    });
  },
  render:function(){
    return (
      <div>
        <NavComponent />
        <HistoryComponent />
        <SelectComponent />
        <FooterComponent />
      </div>
    )
  }
})

React.render(<App />,document.getElementById('content'));