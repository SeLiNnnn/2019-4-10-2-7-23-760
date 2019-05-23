module.exports = function main(inputs) {
  let totalPrice = 0,
    startPrice = 6, //起步价
    parkPrice = 0.25, //停车每分钟0.25元
    perPrice = 0.8, //每公里单价
    extraPrice = 1.5 * perPrice, //超过8公里 每公里1.25
    distance = inputs.distance, // 行车距离 km
    parkTime = inputs.parkTime // 停车时长 min

  if (distance < 2 && distance > 0) {
    //距离小于2km
    totalPrice = startPrice + parkTime * parkPrice //起步价+停车费
  } else if (distance <= 8) {
    // 2-8公里
    totalPrice = startPrice + (distance - 2) * perPrice + parkTime * parkPrice // 起步价+除2公里外 每公里0.8 + 停车费
  } else if (distance > 8) {
    // 大于8km
    totalPrice =
      startPrice +
      (8 - 2) * perPrice +
      (distance - 8) * extraPrice +
      parkTime * parkPrice // 起步价 + 8公里内价格 + 超出价格 + 停车费
  } else {
    // 距离小于0  报错
    console.log("请输入正确的距离以便计算!")
  }

  return Math.round(totalPrice)
}
