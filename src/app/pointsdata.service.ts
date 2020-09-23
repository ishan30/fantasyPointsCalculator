import { Injectable } from '@angular/core';
import { PointData } from 'src/pointData';

@Injectable({
  providedIn: 'root'
})
export class PointsdataService {

  pointData: PointData[] = [
    {
      playerName: 'Shreyas Iyer',
      teamName: 'Semicolon Spartans (Ishan)',
      points: 59,
      match: 1,
      playerType: 3
    },
    {
      playerName : 'Kagiso Rabada',
      teamName: 'Semicolon Spartans (Ishan)',
      points: 100,
      match: 1,
      playerType: 3
    }
  ];

  constructor() { }

  public getPoints() {
    return this.pointData;
  }

  public addPlayerPerformance(scoreData: PointData) {
      this.pointData.push(scoreData);
  }
}
