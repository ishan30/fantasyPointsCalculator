import {AfterViewInit, OnInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PointsdataService } from '../pointsdata.service';
@Component({
  selector: 'app-points-grid-data',
  templateUrl: './points-grid-data.component.html',
  styleUrls: ['./points-grid-data.component.css']
})
export class PointsGridDataComponent implements OnInit , AfterViewInit {

  constructor(private pointsDataService: PointsdataService) { }
  pointsData;
  displayedColumns;
  dataSource;

  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.displayedColumns = ['playerName', 'teamName', 'points', 'match'];
    this.pointsData = this.pointsDataService.getPoints();
    this.dataSource = new MatTableDataSource(this.pointsData);
  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
}
