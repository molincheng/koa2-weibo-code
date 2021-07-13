# 项目创建

## 一、使用koa框架生态+NodeJS搭建项目环境及配置

+ 安装koa框架生态环境

  ```javascript
  npm install -g koa-generator	/*将koa框架生态*/
  /*a安装完成后，命令行面板会有koa和koa2两个指令
  koa  1.0版本
  koa2 为2.0版本*/
  ```

+ 使用koa框架生态生成项目

  ```javascript
  koa2 -e koa2-weibo-code
  /*
  -e 为使用ejs为模板引擎
  koa-weibo-code 为创建的项目名
  
  install koa2-weibo-code:
       > cd koa2-weibo-code && npm install
  run the app:
       > SET DEBUG=koa* & npm start koa2-weibo-code
  根据提示进入到显目并启动
  */
  ```

+ koa2-weibo-code项目文件说明

  ```
  2021-07-13  11:20               977 app.js
  2021-07-13  11:20    <DIR>          bin						#启动文件目录
  2021-07-13  11:21    <DIR>          node_modules			 #包依赖文件夹
  2021-07-13  11:21           104,510 package-lock.json		
  2021-07-13  11:21               631 package.json			 #项目文件说明
  2021-07-13  14:23               662 Project_README.md
  2021-07-13  11:20    <DIR>          public					#静态资源文件夹
  2021-07-13  13:48                68 README.md
  2021-07-13  11:20    <DIR>          routes					#路由目录
  2021-07-13  11:20    <DIR>          views					#存放ejs模板引擎文件
  ```