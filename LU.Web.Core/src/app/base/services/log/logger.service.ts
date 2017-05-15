import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logError(message:string){
    if(message && console && console.log) {
      console.log('Error: ' + message);
    }
  }

  logInfo(message: string){
    if(message && console && console.log) {
      console.log('Info: '+ message);
    }
  }
}
