<template>
  <div>

    <div v-for="(item, index) in items">
      <pie-statis></pie-statis>
    </div>
    <b-button id="addbut" @click="add" variant="primary">Toggle Me</b-button>
  </div>
</template>
<script>
  import pieStatis from '../pie/pieStatis.vue'

  export default {
    name:"analyseStatic",
    data() {
      return{
        items:[]
      }
    },
    methods: {
      add: function () {
        this.items.push(1)
      }
    },
    components: {
      pieStatis
    }
  }
</script>
