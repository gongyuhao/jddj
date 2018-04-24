const mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin','*')//跨域
    var result = mock.mock({
        errcode:0,
        msg:'ok',
        'data|5':[
            {
                'id|+1':1,
                'guid':'@guid',
                'title':'@ctitle',
                'star|1-5':'★',
                'src|1':[
                    '/static/logo1.png',
                    '/static/logo2.png',
                    '/static/logo3.png',
                    '/static/logo4.jpg',
                    '/static/logo5.png',
                    '/static/logo6.png',
                    '/static/logo7.jpg',
                    '/static/logo8.jpg',
                    '/static/logo9.jpg',
                    '/static/logo10.png',
                ],
                "fg|1":[
                    "商家自送",
                    "达达专送"
                ]
                ,
                'time|30-120':0,
                'much|1':[
                    '0','10','19','20','30','40'
                ],
                'long|0-3.2':0,
                'how|1':['基础运费4元','免基础运费'],
                'many|20-1000':0,
                'arrs|2-10':[
                    {
                        'cx|1':[
                            '满120元减60元',
                            '立减2',
                            '满69元减3元运费',
                            '8.8折劵,满69减20',
                            '满19减1',
                            '满79减30',
                        ]
                    }
                ]
            }
        ]
    })
    res.send(result)
}