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
 * syncWaterfallHook: 瀑布同步钩子
 * A waterfall hook also calls each tapped function in a row. 
 * Unlike the basic hook, it passes a return value from each function to the next function
 */
const hook = new SyncWaterfallHook(['param']);

hook.tap('syncWaterfallHook', param => {
  console.log('---syncWaterfallHook---', param);
  return param + 1;
});

hook.tap('syncWaterfallHook2', param => {
  console.log('---syncWaterfallHook2---', param);
  return param + 1;
});

hook.tap('syncWaterfallHook3', param => {
  console.log('---syncWaterfallHook3---', param);
  return param + 1;
});

hook.call('1');
