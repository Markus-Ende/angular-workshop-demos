import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators'

const observable = new Observable(observer => {
  setInterval(() => observer.next('Hi!'), 2000);
});

console.log('Waiting for observable...');

observable.subscribe(s => console.log(s));
