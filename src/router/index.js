import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/pages/About'
import Projects from '@/components/pages/Projects'
import ProjectDescription from '@/components/pages/ProjectDescription'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/project_description/:project',
      name: 'ProjectDescription',
      component: ProjectDescription,
      props: true
    }
  ]
})
