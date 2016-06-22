(function() {
    var config = {
        base: './src',   // 基于调用seajs.use()的页面地址
        alias: {
            'arale-class':  'class/class',
            'arale-events': 'events/events'
        },
        debug: true,
        chartset: 'utf-8'
    };
    seajs.config(config);

    if(typeof define === 'function') {
        define(function(require, exports, module){
            module.exports = config;
        })
    }
    return config;
})()