mountMyApp = function(options = {}) {
  try {
    if (options.simulateError === true) {
      throw 'An error has been simulated';
    }
    Vue.createApp({
      data() {
        return {
          greeting: "Hi there!",
          label: "this page",
          docsUrl: "https://v3.vuejs.org"
        }
      }
    }).mount('#app');
    showHideElements('display-after-load', 'block');
  }
  catch (error) {
    console.error(error);
    showHideElements('display-if-error', 'block');
  }
  showHideElements('display-before-load', 'none');
}

showHideElements = function(classname, display) {
  for (const element of document.getElementsByClassName(classname)) {
     element.style.display = display;
  }
}
