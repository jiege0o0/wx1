require('./weapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

//sasas
wx.cloud.init({
  // env: 'release-c00aa8'
  env: 'hange0o0-1-797611'
  
});
var a;

// wx.cloud.callFunction({      //取玩家openID,
//   name: 'onShareIn',
//   data: {
//     other: 'oRxld5dkAEvmkaAld2xMJ4rOXsrg',
//     skinid: 3,
//   },
//   complete: (res) => {
//     console.log('666',res)
//   }
// })

// const db = wx.cloud.database();
// db.collection('user').doc('XA8m5JT75u22b_2a').update({
//   data: {levelData:{3:4}},
//   success: (res) => {
//     console.log(res)
//   },
// })


egret.runEgret({
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 1136,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		maxTouches: 2,
		//----auto option end----
    renderMode: 'webgl',
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
});

// require("egret.min.js")
