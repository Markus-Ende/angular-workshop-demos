this.x = 'bla';

var o = {
  x: 'fu',
  func1: function() {
    console.log('func 1 x:', this.x);
    console.log('func 1 this:', this);
  },
  func2: () => {
    console.log('func 2 x:', this.x);
    console.log('func 2 this:', this);
  }
};

o.func1();
o.func2();
