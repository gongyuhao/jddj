const mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    var result = mock.mock({
        'data|5':[
            {
                'id|+1':'1',
                'guid':'@guid',
                'name':'@cname',
                'title':'@ctitle',
                'star|1-5':'★'
            }
        ]
    })
    res.send(result)
}