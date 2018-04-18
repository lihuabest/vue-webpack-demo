/**
 * 基础路由对象
 */
export default [
  { name: 'charts', icon: '', link: '', checked: false, expand: true, children: [
    {name: 'echarts.pie', icon: '', link: '/charts/echarts/pie', checked: false, expand: false, children: []},
    {name: 'echarts.line', icon: '', link: '/charts/echarts/line', checked: false, expand: false, children: []}
  ]},
  {name: 'jsplumb', icon: '', link: '/jsplumb', checked: false, expand: false, children: []},
  {name: 'component', icon: '', link: '', checked: false, expand: false, children: [
    {name: 'dynamic', icon: '', link: '/component/dynamic', checked: false, expand: false, children: []}
  ]}
  // ,
  // {name: '导航3', icon: '', link: '', checked: false, expand: false, children: []}
]
