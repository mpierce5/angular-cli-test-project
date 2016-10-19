import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class KSLFeedService {
  private url = 'http://localhost:5000';
  private socket;
  private categorySocket;

  getCategoryObservable() {
    let observable = new Observable(obvserver => {
      this.categorySocket = io(this.url);
      return () => {
        this.categorySocket.disconnect();
      };
    });
    return observable;
  }

  changeCategory(categoryID){
    this.categorySocket.emit('change-category', categoryID);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('ksl-feed-item', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }


}

