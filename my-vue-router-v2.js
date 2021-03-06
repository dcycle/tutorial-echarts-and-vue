MyApp = {
  mount: function() {
    const LineChart = { template: '#vue-route-home'}
    const BarChart = { template: '#vue-route-barchart'}

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

    this.vue = vueApp = Vue.createApp({
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
    }).use(router).mount('#app');
  }
}
