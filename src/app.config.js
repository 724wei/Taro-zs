export default defineAppConfig({
  appId: 'wx805ddd9e57be1877',
  pages: [
    'pages/index/index',
    'pages/home/home'

  ],
  tabBar:{
    list:[
      {
        pagePath:'pages/index/index',
        text:'首页'
      },
      {
        pagePath:'pages/home/home',
        text:'深深'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
