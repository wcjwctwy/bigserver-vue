import pieDemo from '@/components/analyse/pie/pieDemo'
import pieStatis from '@/components/analyse/stats/pieStatis'
import lineDemo from '@/components/analyse/line/lineDemo'
  const routes=  [{
        path: "pie/pieStatis",
        component: pieStatis
      },{
        path: "pie/pieDemo",
        component: pieDemo
      }, {
        path: "line/lineDemo",
        component: lineDemo
      }];
export default routes
