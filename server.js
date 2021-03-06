var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./build/webpack.config.dev.js');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        hash: true,
        timings: true,
        chunks: true,
        chunkModules: false,
        modules: false,
    }
});
server.listen(3000,'localhost',function(err, result) {
    if(err){
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000');
})