import Vue from 'vue'
import Router from 'vue-router'
import TodoApp from '@/components/TodoApp.vue'
import Element from 'element-ui'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoApp',
      component: TodoApp
    }
  ]
})
