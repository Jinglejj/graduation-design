/**
 * 音频播放时间换算
 * @param {number} value - 音频当前播放时间，单位秒
 */
function transTime(value) {
    if (!value) {
        return '00:00'
    }
    var time = "";
    var h = parseInt(value / 3600);
    value %= 3600;
    var m = parseInt(value / 60);
    var s = parseInt(value % 60);
    if (h > 0) {
        time = formatTime(h + ":" + m + ":" + s);
    } else {
        time = formatTime(m + ":" + s);
    }
    return time;
}
/**
 * 格式化时间显示，补零对齐
 * eg：2:4  -->  02:04
 * @param {string} value - 形如 h:m:s 的字符串
 */
function formatTime(value) {
    if (!value) {
        return ''
    }
    var time = "";
    var s = value.split(':');
    var i = 0;
    for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
        time += ":";
    }
    time += s[i].length == 1 ? ("0" + s[i]) : s[i];
    return time;
}
export{
    transTime,
    formatTime,
}
