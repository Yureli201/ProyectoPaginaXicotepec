import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private userIdSource = new BehaviorSubject<string>('');
  currentUserId = this.userIdSource.asObservable();

  setUserId(userId: string) {
    this.userIdSource.next(userId);
  }
}
