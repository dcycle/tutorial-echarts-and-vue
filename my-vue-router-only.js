MyApp = {
  mount: function(options = {}) {
    const LineChart = {
      // https://stackoverflow.com/questions/47679547/vue-router-bind-data
      props: ['greeting'],
      template: `
        <h3>{{ greeting }} Hello</h3>
      `
    }
    const BarChart = {
      props: ['greeting'],
      template: `
        <h3>{{ greeting }} World</h3>
      `
    }

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

    this.vue = Vue.createApp({
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
