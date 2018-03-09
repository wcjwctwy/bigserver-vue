<template>
  <div>
    <h1>组件动态注入</h1>
    <datepicker multi></datepicker>
    <b-button @click="add" variant="primary">添加组件</b-button>
    <div v-for="item in items">
      <!--//3、引用组件-->
      <input v-model="subId"/>
      <test-moudle :id="subId"></test-moudle>
    </div>
  </div>
</template>

<script>
  //1、引入组件
  import testmoudle from './testmoudle.vue'
  import datepicker from '@/components/utils/datepicker'

  export default {
    name: 'about',
    data () {
      return {
        subId:"",
        items: []
      }
    },
    methods:{
      add(){
        this.items.push(1)
      }
    },
    //2、注册组件
    components:{
      testMoudle:testmoudle,
      datepicker:datepicker
    }
  }
</script>
