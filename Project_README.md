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

## 二、将项目部署到git仓库

```
git init				#初始化git仓库
git add .				#添加所有文件到临时仓库
git remote add origin https://github.com/molincheng/koa2-weibo-code.git		#添加远程仓库地址
git push origin master				#把临时仓库的文件推到线上仓库的主分支上
git pull origin master				#将线上仓库的主分支拉到本地仓库中
```

## 三、eslint 和 pre-commit模块包使用（代码规范和代码提交规范检测）

### eslint——用于开发中编写代码规范的检测工具

+ .eslintignore —— 用来配置需要过滤的文件或文件夹

  ```
  node_modules
  test
  src/public
  ```

+ .eslintrc.json —— 用来配置代码规范的规则

  ```json
  {
  	"parser":"babel-eslint",
  	"env":{
  		"es6":true,
  		"commonjs":true,
  		"node":true
  	},
  	"rules":{
  		"indent":["error",4],
  		"quotes":[
  			"error",
  			"single",
  			{
  				"allowTemplateLiterals":true
  			}
  		],
  		"semi":[
  			"error",
  			"never"
  		]
  	}
  }
  ```

+ package.json

```json
 "scripts": {
        "lint": "eslint --ext .js ./src"
    }
```



### pre-commit —— 当对代码进行git提交时,进行代码规范检测，如不规范则无法提交

```json
npm i pre-commit --save-dev

package.json
"pre-commit": [
        "lint"
    ]

```

# 创建koa2_weibo_db数据库

### 创建users、blogs表

```mysql
--users table--
create table users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    'password' VARCHAR(45) NOT NULL,
    nickname VARCHAR(45) NOT NULL
);

--blogs table--
create table blogs(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    content TEXT NOT NULL,
    userid INT NOT NULL
);
```

### 创建blogs表的外键并级联

```MYSQL
ALTER TABLE blogs
ADD FOREIGN KEY(userid)			--添加外键
REFERENCES users(id)			--关联表
ON DELETE CASCADE				--级联删除
ON UPDATE CASCADE;				--级联更新
```

### 删除blogs表的外键

```mysql
ALTER TABLE blogs
DROP FOREIGN KEY
`表的外键名`;
```

