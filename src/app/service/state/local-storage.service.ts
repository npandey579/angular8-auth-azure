import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    private subject = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
  public setItem<T>(key:string, value:T):void{
    localStorage.setItem(key, JSON.stringify(value));
  }

  
  public getItem<T>(key:string):string{
    return localStorage.getItem(key);
  }

  public removeItem(key:string):void{
    return localStorage.removeItem(key)
  }
}