# websocket-demo

这是一个WebSocket通信的演示程序，使用了node/express框架、socket.io的JavaScript前后端实现，以及前端的angularJS与Bootstrap. 对于对express.js 及 WebSocket 的学习很不错，要求对AngularJS有必要的了解。

由于使用Node/Express, 前端及后端都可在NetBeans IDE(8.1)下编写，项目开发极为方便。

## nginx的配置

在使用Nginx对express.js服务器进行代理、且用到WebSocket时，需要特别的配置文件，[这里](https://github.com/gnu4cn/websocket-demo/blob/master/ws-demo.nginx.example)有一个示例。
