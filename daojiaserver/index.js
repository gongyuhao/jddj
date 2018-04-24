const express=require('express')

const app=express()
app.use(express.static('./static'))

app.get('/index',require('./src/get.index.js'))
app.get('/shops',require('./src/get.shops.js'))
app.get('/ctgs',require('./src/get.ctgs.js'))
app.get('/goods',require('./src/get.goods.js'))
app.get('/fenlie',require('./src/get.fenlie.js'))
app.get('/lists',require('./src/get.lists.js'))
app.get('/shopcar',require('./src/get.shopcar.js'))
app.get('/order',require('./src/get.order.js'))

app.listen(88)