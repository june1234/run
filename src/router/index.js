/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/layout/Layout.vue'),
      children: [{
        path: '',
        name: 'index',
        component: () => import('@/components/layout/index/Index.vue')
      },
      {
        path: 'region',
        name: 'region',
        component: () => import('@/components/layout/region')
      },
      {
        path: 'Report',
        name: 'Report',
        component: () => import('@/components/layout/report')
      },
      {
        path: 'Report/specialReport',
        name: 'ReportSpecialReport',
        component: () => import('@/components/layout/report/specialReport.vue')
      },
      {
        path: 'NewsList',
        name: 'newsList',
        component: () => import('@/components/layout/news')
      },
      {
        path: 'NewsList/NewsDetail',
        name: 'newsListDetail',
        component: () => import('@/components/layout/news/NewsDetail.vue')
      },
      {
        path: 'EconomyEvent',
        name: 'EconomyEvent',
        component: () => import('@/components/layout/economy')
      },
      {
        path: 'EconomyEvent/economyEventList',
        name: 'economyEventList',
        component: () => import('../components/layout/economy/economyEventList.vue')
      },
      {
        path: 'AntiTerrorismEvent',
        name: 'AntiTerrorismEvent',
        component: () => import('@/components/layout/anti-terrorism')
      },
      {
        path: 'AntiTerrorismEvent/Anti-terrorismEventList',
        name: 'Anti-terrorismEventList',
        component: () => import('@/components/layout/anti-terrorism/Anti-terrorismEventList.vue')
      },
      {
        path: 'PoliticsEvent',
        name: 'PoliticsEvent',
        component: () => import('@/components/layout/politics')
      },
      {
        path: 'PoliticsEvent/PoliticsEventList',
        name: 'PoliticsEventList',
        component: () => import('@/components/layout/politics/PoliticsEventList.vue')
      },
      {
        path: 'EventTiming',
        name: 'EventTiming',
        component: () => import('@/components/layout/eventTiming')
      },
      {
        path: 'OriginalEvents',
        name: 'OriginalEvents',
        component: () => import('@/components/layout/originalEvent')
      },
      {
        path: 'MacroData',
        name: 'MacroData',
        component: () => import('../components/layout/MacroData')
      }
      ]
    },
    {
      path: '/Error/error404',
      name: '404',
      component: () => import('@/components/error/error404.vue')
    },
    {
      path: '/Error/error500',
      name: '500',
      component: () => import('@/components/error/error500.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/components/admin/admin.vue'),
      children: [{
        path: 'UserManage',
        name: 'UserManage',
        component: () => import('@/components/admin/user')
      },
      {
        path: 'UserManage/userDetail',
        name: 'userDetail',
        component: () => import('@/components/admin/user/UserDetail.vue')
      },
      {
        path: 'GTD/GTDManage',
        name: 'GTDManage',
        component: () => import('@/components/admin/data/GTD')
      },
      {
        path: 'WordBank',
        name: 'WordBank',
        component: () => import('@/components/admin/data/WordBank')
      },
      {
        path: 'News/newsManage',
        name: 'newsManage',
        component: () => import('@/components/admin/data/News')
      },
      {
        path: 'politicalevents',
        name: 'politicalevents',
        component: () => import('@/components/admin/eventManagement/politicalEvents')
      },
      {
        path: 'economicevents',
        name: 'economicevents',
        component: () => import('@/components/admin/eventManagement/economicEvents')
      },
      {
        path: 'counterterrorismincidents',
        name: 'counterterrorismincidents',
        component: () => import('@/components/admin/eventManagement/counterTerrorismincidents')
      },
      {
        path: 'Log/OpreateLog',
        name: 'OpreateLog',
        component: () => import('@/components/admin/log/OpreateLog')
      },
      {
        path: 'expert',
        name: 'expert',
        component: () => import('@/components/admin/expertparameters')
      }
      ]
    }
  ]
})
