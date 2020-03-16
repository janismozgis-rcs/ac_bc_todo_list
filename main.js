import Vue from 'vue';
import App from './App.vue';


new Vue({
    render: renderFn => renderFn(App)
}).$mount('#app');