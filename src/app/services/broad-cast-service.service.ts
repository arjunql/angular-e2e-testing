import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';


export interface BroadCastEvent {
  key: string;
  data:null;
}

@Injectable({
  providedIn: 'root'
})
export class BroadCastServiceService {

  private _eventBus: Subject<BroadCastEvent>;

  constructor() {
      this._eventBus = new Subject<BroadCastEvent>();
  }

  /**
   *
   * @param key : BroadCasting key.
   * @param data : Data object.
   *
   * @description
   * This function is use to receive data from one component along with given key.
   */
  broadcast(key: string, data?:any) {
      this._eventBus.next({ key, data });
  }

  /**
   *
   * @param key : BroadCasting key.
   * @description
   * This function emit data on the basis of the give broadCasting key.
   *
   * It returns  data of same type as it received from broadcast() method.
   */
  on<T>(key: string): Observable<T> {
      return this._eventBus.asObservable().pipe(
          filter((event) => event.key === key),
          map((event:any) => event.data)
      );
  }
}
