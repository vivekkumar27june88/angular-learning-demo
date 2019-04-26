import { Component, ViewChild, OnInit } from '@angular/core';
import {
  Observable,
  Observer,
  fromEvent,
  of,
  from,
  concat,
  throwError,
  Subject,
  interval,
  BehaviorSubject,
  queueScheduler,
  asyncScheduler,
  asapScheduler,
  merge
} from 'rxjs';
import {
  map,
  filter,
  flatMap,
  retry,
  retryWhen,
  scan,
  takeWhile,
  delay,
  catchError,
  take,
  concatMap,
  tap,
  observeOn
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form-demo';

  @ViewChild('inputRef')
  inputRef;

  constructor(private httpClient: HttpClient, private testService: TestService) {
    // this.testCreateObservable1();
    // this.testCreateObservable2();
    // this.testMergeOperator();
    // this.testRetryOperator();
    // this.testRetryWhenOperator();
    // this.testCatchError();
    // this.testConcat();
    // this.testBehaviorSubject();
    // this.testQueueScheduler();
    this.testObserveOnWithScheduler();
  }

  ngOnInit() {
    // this.createObserableFromInputElement();
    // this.testMapOperator();
    // this.testFilterOpeator();
  }

  //#region Creating Observable

  createObservalbe1() {
    return Observable.create((observer: Observer<any>) => {
      let counter = 0;
      const intervalId = setInterval(() => {
        if (counter === 10) {
          observer.complete();
        }
        observer.next(`vivek-${++counter}`);
      }, 1000);

      return () => {
        console.log(`Terminating subscription`);
        clearInterval(intervalId);
      };
    });
  }

  testCreateObservable1() {
    const source$ = this.createObservalbe1();
    const sourceSubscription = source$.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('completed');
      }
    );

    /* setTimeout(() => {
      sourceSubscription.unsubscribe();
    }, 3100); */
  }

  createObservable2() {
    return of({ name: 'vivek', company: 'Schlumberger', address: 'Pune, India' });
  }

  testCreateObservable2() {
    this.createObservable2().subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('createObservable2 COMPLETED')
    );
  }

  createObserableFromInputElement() {
    fromEvent(this.inputRef.nativeElement, 'keyup').subscribe((event: KeyboardEvent) => {
      console.log(event.target['value']);
    });
  }
  //#endregion

  //#region Operators

  testMapOperator() {
    fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(map((event: KeyboardEvent) => event.target['value']))
      .subscribe(data => {
        console.log(data);
      });
  }

  testFilterOpeator() {
    fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(filter((event: KeyboardEvent) => event['key'] === event['key'].toUpperCase()))
      .subscribe(data => {
        console.log(data);
      });
  }

  getPosts() {
    return this.httpClient.get('http://localhost:3000/api/posts');
  }

  getComments() {
    return this.httpClient.get('http://localhost:3000/api/comments');
  }

  testMergeOperator() {
    // this.getPosts().subscribe(posts => {
    //   console.log({ posts });
    // });

    // this.getComments().subscribe(comments => {
    //   console.log({ comments });
    // });

    // this.getPosts().subscribe(posts => {
    //   console.log({ posts });

    //   this.getComments().subscribe(comments => {
    //     console.log({ comments });
    //   });
    // });

    of()
      .pipe(merge(this.getPosts(), this.getComments()))
      .subscribe(data => console.log(data));
  }

  testRetryOperator() {
    this.httpClient
      .get('http://localhost:3000/api/postss')
      .pipe(retry(3))
      .subscribe(
        data => {
          console.log(`testRetryOperator >>> data >>> `, data);
        },
        error => {
          console.warn('testRetryOperator >>> error >> ', error);
        }
      );
  }

  testRetryWhenOperator() {
    this.httpClient
      .get('http://localhost:3000/api/postss')
      .pipe(retryWhen(this.retryStrategy({ attempts: 5, delayInMs: 2000 })))
      .subscribe(
        data => {
          console.log(`testRetryOperator >>> data >>> `, data);
        },
        error => {
          console.warn('testRetryOperator >>> error >> ', error);
        }
      );
  }

  retryStrategy({ attempts = 4, delayInMs = 1000 }) {
    return errors => {
      return errors.pipe(
        scan((acc, value) => {
          console.log({ acc });
          return acc + 1;
        }, 0),
        takeWhile(val => val < attempts),
        delay(delayInMs)
      );
    };
  }

  testCatchError() {
    this.httpClient
      .get('http://localhost:3000/api/postss')
      .pipe(
        catchError(error => {
          console.log('inside of catchError');
          return throwError({ msg: 'Hello' });
        })
      )
      .subscribe(
        data => {
          console.log(`testRetryOperator >>> data >>> `, data);
        },
        error => {
          console.warn('testRetryOperator >>> error >> ', error);
        }
      );
  }

  testConcat() {
    const combined$ = concat(this.getComments(), this.getPosts(), this.getComments());
    combined$.subscribe(data => {
      console.log('testConcat >>> combined$data >>> ', data);
    });
  }

  testConcatMap() {
    // emit delay value
    const source = of(2000, 1000);

    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val))));

    // output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe(val => console.log(`With concatMap: ${val}`));
  }

  testSubject() {
    const subject = new Subject();
    interval(1000)
      .pipe(take(5))
      .subscribe(subject);

    subject.subscribe(
      next => console.log(`subscription 1 >>> next >>> `, next),
      error => console.log('subscription 1 >>> error >>>', error),
      () => console.log('subscription 1 >>> COMPLETED')
    );

    subject.subscribe(
      next => console.log(`subscription 2 >>> next >>> `, next),
      error => console.log('subscription 2 >>> error >>>', error),
      () => console.log('subscription 2 >>> COMPLETED')
    );

    subject.subscribe(
      next => console.log(`subscription 3 >>> next >>> `, next),
      error => console.log('subscription 3 >>> error >>>', error),
      () => console.log('subscription 3 >>> COMPLETED')
    );
  }

  testSubject2() {
    const subject = new Subject();

    subject.subscribe(
      next => console.log(`subscription 1 >>> next >>> `, next),
      error => console.log('subscription 1 >>> error >>>', error),
      () => console.log('subscription 1 >>> COMPLETED')
    );

    subject.next(100);

    subject.subscribe(
      next => console.log(`subscription 2 >>> next >>> `, next),
      error => console.log('subscription 2 >>> error >>>', error),
      () => console.log('subscription 2 >>> COMPLETED')
    );

    subject.next(200);
  }

  testBehaviorSubject() {
    const behaviorSubject = new BehaviorSubject(100);

    behaviorSubject.subscribe(
      next => console.log(`subscription 1 >>> next >>> `, next),
      error => console.log('subscription 1 >>> error >>>', error),
      () => console.log('subscription 1 >>> COMPLETED')
    );

    behaviorSubject.next(200);

    behaviorSubject.subscribe(
      next => console.log(`subscription 2 >>> next >>> `, next),
      error => console.log('subscription 2 >>> error >>>', error),
      () => console.log('subscription 2 >>> COMPLETED')
    );

    behaviorSubject.next(300);
  }

  //#endregion

  //#region Scheduler in RxJS
  testQueueScheduler() {
    console.log('testQueueScheduler >>> START');

    const queueSch$ = of('Queue Scheduler', queueScheduler);
    const asyncSch$ = of('Async Scheduler', asyncScheduler);
    const asapSch$ = of('ASAP Scheduler', asapScheduler);

    merge(asapSch$, asyncSch$, queueSch$).subscribe(d => console.log(d));

    console.log('testQueueScheduler >>> END');
  }

  testObserveOnWithScheduler() {
    console.log('testObserveOnWithScheduler >>> START');

    from([1, 2, 3], queueScheduler)
      .pipe(
        tap(d => console.log(`WITHOUT OBSERVE-ON >>> TAP >>> ONE >>> ${d}`)),
        tap(d => console.log(`WITHOUT OBSERVE-ON >>> TAP >>> TWO >>> ${d * 2}`))
      )
      .subscribe();

    from([1, 2, 3], queueScheduler)
      .pipe(
        tap(d => console.log(`WITH OBSERVE-ON >>> TAP >>> ONE >>> ${d}`)),
        observeOn(asyncScheduler),
        tap(d => console.log(`WITH OBSERVE-ON >>> TAP >>> TWO >>> ${d * 2}`))
      )
      .subscribe();

    console.log('testObserveOnWithScheduler >>> END');
  }

  //#endregion
}
