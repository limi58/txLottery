const React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {activeLi: 'li1'}
  },
  clickLi: function(li){
    this.setState({activeLi: li})
  },
  render: function(){
    return(
      <div className="navWrapper grey">
        <nav>
          <ul className="row">
            <li onClick={this.clickLi.bind(this, 'li1')} className={"col-xs-4 " + (this.state.activeLi === 'li1' ? 'active' : '')}><a className={"rightBorder"}><b>选第1位</b></a></li>
            <li onClick={this.clickLi.bind(this, 'li2')} className={"col-xs-4 " + (this.state.activeLi === 'li2' ? 'active' : '')}><a className={"rightBorder"}><b>选2全中</b></a></li>
            <li onClick={this.clickLi.bind(this, 'li3')} className={"col-xs-4 " + (this.state.activeLi === 'li3' ? 'active' : '')}><a><b>选3全中</b></a></li>
          </ul>
        </nav>
      </div>
    )
  }
})