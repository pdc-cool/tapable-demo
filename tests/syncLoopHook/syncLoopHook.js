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
 * When a plugin in a loop hook returns a non-undefined value the hook will restart from the first plugin.
 * It will loop until all plugins return undefined
 * 当插件的回调函数返回一个非 undefined，会重新开始执行回调函数直到所有插件回调都返回 undefined 才停止
 */
const hook = new SyncLoopHook(['param']);

hook.tap('SyncLoopHook', (param) => {
  console.log('----SyncLoopHook----', param);
})

hook.tap('SyncLoopHook2', (param) => {
  console.log('----SyncLoopHook2----', param);
  // return 1
})

hook.tap('SyncLoopHook3', (param) => {
  console.log('----SyncLoopHook3----', param);
})

hook.call('1')
