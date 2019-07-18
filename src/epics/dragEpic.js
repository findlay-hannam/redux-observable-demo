import { fromEvent } from 'rxjs';
import { takeUntil, map, mergeMap, switchMap, scan, debounceTime } from 'rxjs/operators';
import { ofType } from 'redux-observable';

const move$ = fromEvent(document, 'mousemove')
const down$ = fromEvent(document, 'mousedown')
const up$ = fromEvent(document, 'mouseup')

const drag$ = down$.pipe(
  mergeMap(down => move$.pipe(takeUntil(up$)))
);

function calculateDistance({ x: previousX, y: previousY, distance }, { x: currX, y: currY }) {
  const stepSizeTakenX = currX - previousX || currX;
  const stepSizeTakenY = currY - previousY || currY;
  const wholeStepTaken = Math.hypot(stepSizeTakenX, stepSizeTakenY);
  return { x: currX, y: currY, distance: distance + wholeStepTaken };
}

const dragEpic = action$ => action$.pipe(
  ofType('PAGELOAD'),
  switchMap(() =>
    drag$.pipe(
      map(({ clientX, clientY }) => ({ x: clientX, y: clientY })),
      scan(calculateDistance, { distance: 0 }),
      debounceTime(50),
      map(payload => ({ type: 'STEP', payload })),
    )
  )
);

export default dragEpic;