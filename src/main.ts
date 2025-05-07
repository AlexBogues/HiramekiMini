import App from './App.vue'
import { createPinia } from 'pinia'
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'

export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue

    // Or Pinia
    const pinia = createPinia()
    Vue.use(pinia)
  },
}

createWebComponent({
  rootComponent: App,
  elementName: 'hiramekumini-test',
  plugins: pluginsWrapper,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  disableShadowDOM: false, // default is false
  replaceRootWithHostInCssFramework: false, // default is false
  loaderAttribute: 'data-web-component-loader', // default is 'data-web-component-loader'
  hideSlotContentUntilMounted: true, // default is false
})
