# txLottery 腾讯彩票前端面试题解决方案
[demo点我](http://limi.sinaapp.com)

# Usage
```
$ npm install
```
```
$ gulp
```
# 整体的主要架构
* node.js
* reactjs 
* reflux 
* browserify 
* gulp

# 关于题目要求
> 1、构建稿在微信中能正常浏览

* 阻止了微信内置浏览器下滑的事件

> 2、关注HTML5、css3、js的合理运用

* html5主要用到事件devicemotion
* css3主要用到圆角和渐变

> 3、适配市面上大部分iphone、Android手机屏幕。

* 用到基于bootstrap的栅格，测试都适应

> 4、关注可能存在的页面性能问题。

* 考虑到页面有频繁的 dom 操作，所以基于 react 来构建UI
 
# 没有做的东东
* nav有点不懂是什么意思，所以只做了3个
* 向下向上箭头和摇一摇图标没有好素材所以没有加上
* 也许还有一些没理解的需求
