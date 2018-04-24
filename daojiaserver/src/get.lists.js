const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|10":[
            {
                "guid":"@guid",
                "text":"@cword(4)",
                "title":"@cword(2,4)",
                "children|5-10":[
                    {
                        "guid":"@guid",
                        "text":"@cword(2,5)",
                    }
                ]
            }
        ]
    })
    res.send(result)
}