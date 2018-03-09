<template>
  <div>
    <h1>Jsonp 异步调用 数据双向绑定</h1>
    <p>(子组件属性ID:){{id}}</p>
    <p>{{msg}}</p>
    <button @click="get()">jsonp</button>
    <!--<input v-model="msg">-->
  </div>
</template>
<script>
  import jquery from 'jquery'
  export default {
    props: {
      id: String  //定义传值的类型<br>    }
    },
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
