MyApp = {
  mount: function(options = {}) {
    try {
      if (options.simulateError === true) {
        throw 'An error has been simulated';
      }

      const LineChart = {
        props: [
          'greeting',
          'input_binding',
        ],
        template: '#vue-route-home'
      }
      const BarChart = {
        props: [
          'greeting',
          'input_binding',
        ],
        template: '#vue-route-barchart'
      }

      const routes = [
        {
          path: '/',
          component: LineChart,
          meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutRight',
          }
        },
        {
          path: '/bar-chart',
          component: BarChart,
          meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
          }
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

      this.vue = Vue.createApp({
        watch: {
          $route() {
            // https://stackoverflow.com/a/64751397/1207752
            this.$nextTick(this.routeLoaded);
          },
          input_binding(val) {
            $('input.my-input-in-route-input_binding').val(val);
          },
        },
        methods: {
          // https://stackoverflow.com/a/64751397/1207752
          routeLoaded() {
            $('input.my-input-in-route-input_binding').val(MyApp.vue.input_binding);
            $('input.my-input-in-route-input_binding').off().on('keyup', function() {
              MyApp.vue.input_binding = $(this).val();
            });
            switch (this.$route.path) {
              case '/':
                break;
              case '/bar-chart':
                break;
            }
          }
        },
        data() {
          return {
            greeting: "Hi there!",
            input_binding: "This uses input binding.",
            label: "this page",
            docsUrl: "https://v3.vuejs.org"
          };
        }
      }).use(router).mount('#app');

      this.showHideElements('display-after-load', 'block');
    }
    catch (error) {
      console.error(error);
      this.showHideElements('display-if-error', 'block');
    }
    this.showHideElements('display-before-load', 'none');
  },
  showHideElements: function(classname, display) {
    for (const element of document.getElementsByClassName(classname)) {
       element.style.display = display;
    }
  },
}
