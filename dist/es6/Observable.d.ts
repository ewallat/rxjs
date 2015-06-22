import Observer from './Observer';
import Subscription from './Subscription';
import Scheduler from './scheduler/Scheduler';
export default class Observable {
    static value: (value: any) => Observable;
    static return: (returnValue: any) => Observable;
    static fromEvent: (element: any, eventName: string, selector: Function) => Observable;
    static fromEventPattern: (addHandler: Function, removeHandler: Function, selector: Function) => Observable;
    static throw: (err: any) => Observable;
    static empty: () => Observable;
    static never: () => Observable;
    static range: (start: number, end: number) => Observable;
    static fromArray: (array: Array<any>) => Observable;
    static zip: (observables: Array<Observable>, project: (...observables: Array<Observable>) => Observable) => Observable;
    static fromPromise: (promise: Promise<any>) => Observable;
    static of: (...values: Array<any>) => Observable;
    map: (project: (any) => any) => Observable;
    mapTo: (value: any) => Observable;
    mergeAll: (concurrent?: number) => Observable;
    flatMap: (project: any, concurrent?: number) => Observable;
    concatAll: () => Observable;
    skip: (count: number) => Observable;
    take: (count: number) => Observable;
    subscribeOn: (scheduler: Scheduler) => Observable;
    observeOn: (scheduler: Scheduler) => Observable;
    zipAll: (project: (...observables: Array<Observable>) => Observable) => Observable;
    zip: (observables: Array<Observable>, project: (...observables: Array<Observable>) => Observable) => Observable;
    merge: (observables: Array<Observable>) => Observable;
    toArray: () => Observable;
    constructor(subscriber: (observer: Observer) => Function | void);
    static create(subscriber: (observer: Observer) => any): Observable;
    subscriber(observer: Observer): Function | Subscription | void;
    subscribe(observerOrNextHandler: Observer | ((any) => IteratorResult<any>), throwHandler?: (any) => IteratorResult<any>, returnHandler?: (any) => IteratorResult<any>): Subscription;
    forEach(nextHandler: any): Promise<{}>;
}
