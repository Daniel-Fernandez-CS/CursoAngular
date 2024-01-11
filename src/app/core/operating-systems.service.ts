import { Injectable } from '@angular/core';
import { OperatingSystem } from '../interfaces/operating-systems';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemsService {

  operatingSystems: OperatingSystem[] = [{id: "win" , name: "Windows"}, {id: "linux", name: "Linux"}, {id: "osx", name: "MacOs"}];

  constructor() {  }

  getOperatingSystems(): OperatingSystem[]{
    return this.operatingSystems;
  }
}
