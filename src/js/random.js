// 返回start 和 end 之间的数值，不包括end
module.exports = function(start, end){
  return Math.floor(Math.random() * (end - start) + start);
}