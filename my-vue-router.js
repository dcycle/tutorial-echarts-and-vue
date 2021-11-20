const LineChart = { template: `
  <h3>This is a line chart</h3>
  <div class="echart-main" style="width:600px; height:400px;"></div>
`}
const BarChart = { template: `
  <h3>This is a bar chart</h3>
  <div class="echart-bar-chart" style="width:600px; height:400px;"></div>
`}

const routes = [
  { path: '/', component: LineChart },
  { path: '/bar-chart', component: BarChart },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const vueApp = Vue.createApp({
  watch: {
    $route() {
      // https://stackoverflow.com/a/64751397/1207752
      this.$nextTick(this.routeLoaded);
    }
  },
  methods: {
    // https://stackoverflow.com/a/64751397/1207752
    routeLoaded() {
      switch (this.$route.path) {
        case '/':
          displayChart('echart-main', 'line');
          break;
        case '/bar-chart':
          displayChart('echart-bar-chart', 'bar');
          break;
      }
    }
  },
  data() {
    return {
      greeting: "Hi there!",
      label: "this page",
      docsUrl: "https://v3.vuejs.org"
    };
  }
});

vueApp.use(router);

vueApp.mount('#app')
