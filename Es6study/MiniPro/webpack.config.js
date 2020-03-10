var path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'dist')
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                use:{
                    loder: 'babel-loader',
                    options : {
                        presets : [ ['env', 
                         { "targets" : {
                            'browsers' : ["lasr 2 versions","ie 9"]
                            },
                            "debug": false
                        }]
                        ]
                    }
                }
            }
        ]
    }
}