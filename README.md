# vue-webpack-demo

运行步骤

第一步，安装依赖
```sh
  npm install
```

第二步，生成dll文件和ployfill文件

生成dll文件，参考文章 https://juejin.im/entry/598bcbc76fb9a03c5754d211
```sh
  npm run pre
```

第三步，开发运行

```sh
  npm run start
```

第三步，打包运行

```sh
  npm run build
```


注意**********

公共的scss文件 通过sass-resources-loader直接打包，公共变量不需要每次引入，修改位置 build/utils.js
```$xslt
scss: generateLoaders('sass').concat({
  loader: 'sass-resources-loader',
  options: {
    resources: path.resolve(__dirname, '../src/assets/styles/_all.scss') // 全局scss文件入口
  }
})
```
