// vue.config.js
const path = require('path')
const Compression = require('compression-webpack-plugin')

module.exports = {
	productionSourceMap: false,
	configureWebpack: config => {
		let proOptions = {}
		if (process.env.NODE_ENV === 'production') {
			proOptions = {
				plugins: [
					new Compression({ // 添加gzip插件 开启gzip
						test: /\.js$|\.html$|\.css/,
						threshold: 8192,
						deleteOriginalAssets: false // 是否删除源文件
					})
				]
			}
		}
		return {
			...proOptions,
			resolve: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components/')
				}
			}
		}
	}
}
