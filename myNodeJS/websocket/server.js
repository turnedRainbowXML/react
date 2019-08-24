const Websocket = require('ws')

// 启动一个websocket服务
const ws = new Websocket.Server({
    port: 8889
})

// 定义一个空数组，用来保存连接上的客户端
const clients = []

// 封装一个群发方法
const sendAll = (data) => {
    for(let e of clients){
        e.send(data)
    }
}

// 监听客户端的连接
ws.on('connection',(client) => {
    console.log('一个死鱼连接上了')
    
    client.send('欢迎来到死鱼聊天室')

    // 保存当前连接上的客户端
    clients.push(client)

    // 监听客户端发来的消息
    client.on('message',(data) => {
        // 当发来的消息里面出现有颜色的内容
        if(data.indexOf('黄') > -1){
            sendAll('有人在开车')

            client.send('我已经找到了你开车的证据')
            client.close()
        }else{
            sendAll(data)
        }
    })

    // 监听客户端断开
    client.on('close',() => {
        console.log('这个死鱼离开了聊天室')
    })
})
