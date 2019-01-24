// const baseUrl = process.env.NODE_ENV === "production" ? "static/" : "./"; //font scss资源路径 不同环境切换控制
module.exports = {
	//基本路径
	baseUrl: './',
	//输出文件目录
	outputDir: 'vexchange',
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir: 'static',
	//以多页模式构建应用程序。
	pages: undefined,
	//是否使用包含运行时编译器的 Vue 构建版本
	runtimeCompiler: false,
	//生产环境是否生成 sourceMap 文件，一般情况不建议打开
	productionSourceMap: false,
	// webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
	devServer: {
		// host: 'localhost',
		host: "localhost",
		port: 8000, // 端口号
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器  http://XXX.XXX.X.XX:7071/rest/XXX/ 
		hotOnly: true, // 热更新
		// proxy: 'http://localhost:8000'           // 配置跨域处理,只有一个代理
		proxy: { //配置自动启动浏览器
			"apis/": {
				target: "http://39.108.213.201",
				changeOrigin: false,
				// ws: true,//websocket支持
				secure: false,
				pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
			}
		}
	}
};