const scpClient = require('scp2')
const path = require('path')
const ora = require('ora')
const chalk = require('chalk')
const Client = require('ssh2').Client
const server = {
    name: '生产环境',
    host: '121.5.108.170',// ip
    port: 22,// 端口
    username: 'root', // 登录服务器的账号
    password: 'Yu044105',// 登录服务器的账号
    path: "/usr/local/search-engine"
  };
  
const conn = new Client()
const spinner = ora(`正在发布到 ${server.name}`)

conn
  .on('ready', function() {
    // rm 删除文件
    conn.exec(`rm -rf ${server.path}*`, function(err, stream) {
      if (err) throw err
      stream
        .on('close', function(code, signal) {
          // 在执行shell命令后，把开始上传部署项目代码放到这里面
          spinner.start()
          scpClient.scp(
            path.resolve(__dirname, '../dist'),
            {
              host: server.host,
              port: server.port,
              username: server.username,
              password: server.password,
              path: server.path
            },
            function(err) {
              spinner.stop()
              if (err) {
                console.log(chalk.red('发布失败.\n'))
                throw err
              } else {
                console.log(chalk.green(`Success! 成功发布到 ${server.name}`))
              }
            }
          )
          conn.end()
        })
        .on('data', function(data) {
          console.log('STDOUT: ' + data)
        })
        .stderr.on('data', function(data) {
          console.log('STDERR: ' + data)
        })
    })
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password
    // privateKey: require('fs').readFileSync('/home/admin/.ssh/id_dsa')
  })
