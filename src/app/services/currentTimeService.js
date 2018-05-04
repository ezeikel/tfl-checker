module.exports = function () {
  var date = new Date();
  var minutes = date.getMinutes();

  this.hours = date.getHours();
  this.formattedMinutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
  this.period = this.hours < 12 ? 'am' : 'pm';
  this.time = this.hours + ':' + this.formattedMinutes + this.period;
};
