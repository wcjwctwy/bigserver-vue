<template>
  <div>
    <h1>HOME</h1>
    <p>{{msg}}</p>
    <button @click="get()">jsonp</button>
    <!--<input v-model="msg">-->
  </div>
</template>

<script>
  import jsonp from 'jsonp'

  export default {
    name: 'home',
    data() {
      return {
        msg:""
      }
    },
    methods: {
      get: function () {
        var that = this;
        jquery.ajax({
          dataType: 'jsonp',
          url: "http://10.20.7.23:33332/analyse/test",
          jsonp: "callback",
          type: "get",
          success: function (data) {
            if (data.status == 200) {
              that.msg = data.data;
            }
          }
        });
      }

    }

  }
</script>
