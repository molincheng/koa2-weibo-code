/**
 * @description sequelize实例
 * @author Albert
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { host, user, password, database } = MYSQL_CONF
const { isProt, isTest } = require('../utils/env')

// 开发环境下使用连接
const conf = {
    host: host,
    dialect: 'mysql'
}

// 如果为test单元测试时不打印console.log()
if (isTest) {
    conf.logging = () => {}
}

// 线上环境，使用连接池
// ps:如开发环境使用连接池会导致开发时出现一些bug不容易调试
if (isProd) {
    conf.pool = {
        max: 5, //连接池中最大的连接数
        min: 0, //最小连接数
        idle: 10000 //如果一个连接池10s之内没有被使用，则释放
    }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq