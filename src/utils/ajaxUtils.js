import jquery from 'jquery'

function ajax() {
  jquery.ajax({
    dataType: 'jsonp',
    url: "http://10.20.7.23:33332/analyse/test",
    jsonp: "callback",
    type: "get",
    success: function (data) {
      if (data.status == 200) {
        return data.data
      }
    }
  })
}

exports.ajax= ajax;

