export default {
  // 时间戳生成uuid （不能保整重复问题，但无所谓）
  uuid() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
    }
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0; // d是随机种子
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  },
  getIndexForArr(arr, item, flag) {
    let index = 0;
    arr.find((v, i) => {
      if (v[flag] === item[flag]) {
        index = i;
      }
    });
    return index;
  },
};
