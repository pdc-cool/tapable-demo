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
 * Basic hook (without “Waterfall”, “Bail” or “Loop” in its name). 
 * This hook simply calls every function it tapped in a row.
 */
const hook = new SyncHook(['param']);

hook.tap('logInfo', param => {
  console.log('----logInfo----', param);
});

hook.tap('logInfo2', param => {
  console.log('----logInfo2----', param);
});

hook.tap('logInfo3', param => {
  console.log('----logInfo3----', param);
});

hook.call('pdc');
