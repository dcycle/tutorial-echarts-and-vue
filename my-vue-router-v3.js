mountMyApp = function() {
  try {
    // Simulate an error half the time
    const simulateErrorIfAbovePointFive = Math.random();
    console.log('will simulate an error if ' + simulateErrorIfAbovePointFive + ' is above .5');
    if (simulateErrorIfAbovePointFive > .5) {
      throw 'simulating an error';
    }

    const LineChart = { template: '#vue-route-home'}
    const BarChart = { template: '#vue-route-barchart'}

    const routes = [
      {
        path: '/',
        component: LineChart,
        meta: { transition: 'fade' },
      },
      {
        path: '/bar-chart',
        component: BarChart,
        meta: { transition: 'fade' },
      },
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

    vueApp.mount('#app');

    showHideElements('display-after-load', 'block');
  }
  catch (error) {
    showHideElements('display-if-error', 'block');
  }
  showHideElements('display-before-load', 'none');
}

showHideElements = function(classname, display) {
  for (const element of document.getElementsByClassName(classname)) {
     element.style.display = display;
  }
}
