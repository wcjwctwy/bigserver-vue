<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div>

    <div style="float: left">
      <b-form-select v-model="selected" :options="options" @change="router_to" class="mb-2 mr-sm-2 mb-sm-0" />
      <div :id="id" style="width: 600px;height: 400px;" ref="abc"></div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import jquery from 'jquery'
  import Vue from 'vue'

  export default {
    name: 'pieStats',
    data() {
      return {
        id:'',
        charts: '',
        text: '',
        subtext: "",
        legenddata: "",
        seriesdata: "",
        selected: null,
        options: [
          { value: null, text: '选择统计类型' },
          { value: 'entId', text: '企业' },
          { value: 'assetId', text: '资产' },
          { value: 'categoryDevice', text: '标准系统' },
          { value: 'eventCategory', text: '日志大类' },
          { value: 'eventCategoryTechnique', text: '日志子类' },
          { value: 'eventLevel', text: '日志级别' },

        ]
      }
    },
    methods: {
      guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      },
      drawPie(id) {
        this.charts = echarts.init(document.getElementById(id));
        this.charts.setOption({
          title: {
            text: this.text,
            subtext: this.subtext,
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: this.legenddata
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                  funnel: {
                    x: '25%',
                    width: '50%',
                    funnelAlign: 'left',
                    max: 1548
                  }
                }
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          series: [
            {
              name: '日志数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: this.seriesdata
            }
          ]
        })
      },
      router_to:function(ele){
        this.get(ele,this.$refs.abc.id)
      },
      get: function (eventClass,nodeId) {
        var that = this;
        jquery.ajax({
          dataType: 'jsonp',
          url: "http://10.20.7.23:33332/analyse/stats/" + eventClass,
          jsonp: "callback",
          type: "get",
          success: function (data) {
            if (data.status == 200) {
              var a = new Array();
              var b = new Array();

              jquery.each(data.data, function (k, v) {
                var alen = a.length;
                a[alen] = k;
                var blen = b.length;
                var tmp = new Object();
                tmp.value = v;
                tmp.name = k;
                b[blen] = tmp;
              });
              that.legenddata = a;
              console.info(that.legenddata);
              that.seriesdata = b;
              that.text = '企业视角';
              that.subtext = '所有企业日志';
              that.drawPie(nodeId)
            }
          }
        });
      }
    },
    //调用
    mounted() {
      this.id= this.guid();
      this.$nextTick(function () {
        this.get("entId",this.id);
      })
    }
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
