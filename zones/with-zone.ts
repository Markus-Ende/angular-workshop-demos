require('zone.js');
declare var Zone;

function asyncFn() {
  console.log('async');
}
function a() {
  console.log('a');
}

function b() {
  console.log('b');
}

function c() {
  console.log('c');
}

function myApp() {
  a();
  setTimeout(asyncFn, 1000);
  b();
  c();
}

const startTime = new Date().getTime();

Zone.current
  .fork({
    onHasTask: (parentZoneDelegate, currentZone, targetZone, hasTaskState) => {
      const { microTask, macroTask, eventTask } = hasTaskState;
      if (!microTask && !macroTask && !eventTask) {
        const elapsedMilliseconds = new Date().getTime() - startTime;
        console.log({ elapsedMilliseconds });
      }
    }
  })
  .run(myApp);
