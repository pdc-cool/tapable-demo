const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

/**
 * A bail hook allows exiting early.
 * When any of the tapped function returns anything, the bail hook will stop executing the remaining ones.
 * A bail hook 可以更早地不执行后续回调
 * 当 tapped 的回调函数返回 anything（in a row）,停止执行后续回调函数
 */
const hook = new SyncBailHook(['param']);

hook.tap('syncBailHook', param => {
  console.log('----syncBailHook---', param);
  // return 'syncBailHook';
});

hook.tap('syncBailHook2', param => {
  console.log('----syncBailHook2---', param);
  // return 'syncBailHook2';
});

hook.tap('syncBailHook3', param => {
  console.log('----syncBailHook3---', param);
  // return 'syncBailHook3';
});

hook.call('1')
