<template>
  <div>
    <b-form inline>
      <b-form-select v-model="selected" :options="options" @change="router_to" class="mb-2 mr-sm-2 mb-sm-0" />
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" />
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
      </b-input-group>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
      <b-button variant="primary">Save</b-button>
    </b-form>
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        selected: null,
        options: [
          { value: null, text: '选择图表类型' },
          { value: '/analyse/pie/pieDemo', text: '饼图' },
          { value: '/analyse/line/lineDemo', text: '折线图' },
          { value: {'C': '3PO'}, text: 'This is an option with object value' },
          { value: '/analyse/pie/pieStatis', text: '统计实例'}
        ]
      }
    },
    methods:{
      router_to:function(ele){
        console.info(ele);
        this.$router.push(ele)
      }
    }
  }
</script>
