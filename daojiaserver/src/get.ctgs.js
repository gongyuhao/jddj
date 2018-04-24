const Mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: 'ok',
            'data|10-18': [
                {
                    guid: '@guid',
                    text: '@cword(2,4)',
                    'childrens|5-20':[
                        {
                            guid:'@guid',
                            text:'@cword(2,4)'
                        }
                    ]
                }
            ]
        })
    )
}