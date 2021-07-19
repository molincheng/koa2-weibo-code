const router = require('koa-router')()

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        isMe: false,
        blogList: [{ id: 1, title: 'aaa' }, { id: 2, title: 'bbb' }, { id: 3, title: 'ccc' }]
    })
})

router.get('/string', async(ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

// 获取用户页面信息
router.get('/profile/:userName', async(ctx, next) => {
    const { userName } = ctx.params
    ctx.body = {
        title: 'this is profile page',
        userName
    }
})

// 加载用户更多信息路由api
router.get('/loadMore/:userName/:pageIndex', async(ctx, next) => {
    const { userName, pageIndex } = ctx.params
    ctx.body = {
        title: 'this is loadmore API',
        userName,
        pageIndex
    }

})

module.exports = router