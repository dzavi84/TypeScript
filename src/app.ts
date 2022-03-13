import { from, interval, Observable, of } from 'rxjs';
import { catchError, delay, map, mergeMap, take } from 'rxjs/operators';

const emitTreeTwoOne = of(3, 2, 1);

const delayedEmit = emitTreeTwoOne.pipe(
  mergeMap((value: number) => {
    console.log(`>>emit>> ${new Date().toLocaleTimeString()}
    value: ${value},
    delaying:${100 * value} ms`);
    return of(value).pipe(delay(1000 * value));
  }),
);

delayedEmit.subscribe((value) => {
  console.log(`<<receive<<
  ${new Date().toLocaleTimeString()}
  recived value :${value}`);
});
