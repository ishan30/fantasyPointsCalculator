import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AuctionTeams } from 'src/assets/auctionteams';
import { PointData } from 'src/pointData';
import { PointsdataService } from '../pointsdata.service';
import { TeamDataService } from '../team-data.service';

@Component({
  selector: 'app-points-calculator',
  templateUrl: './points-calculator.component.html',
  styleUrls: ['./points-calculator.component.css']
})
export class PointsCalculatorComponent implements OnInit {
  // options: string[] = ['One', 'Two', 'Three'];
  teamOptions;
  filteredTeamOptions;
  playerOptions;
  filteredPlayerOptions;

  constructor(private formBuilder: FormBuilder,
              private teamDataService: TeamDataService,
              private pointsDataService: PointsdataService) { }

  // runs = 0 ;
  points = 0;
  formGroup: FormGroup;
  titleAlert = 'This field is required';
  post: any = '';


  ngOnInit() {
    this.teamOptions = this.teamDataService.getTeams();
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      team: [null, Validators.required],
      playerName: [null, Validators.required],
      run: [null, Validators.required],
      dotball: [null, Validators.required],
      wicket: [null, Validators.required],
      catch: [null, Validators.required],
      stumping: [null, Validators.required],
      maiden: [null, Validators.required],
      hattrick: [null, Validators.required],
      capBonus: [null, Validators.required],
      mom: [null, Validators.required],
      validate: ''
    });

    this.filteredTeamOptions = this.team.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );


  }
  setChangeValidate() {
    // this.formGroup.get('validate').valueChanges.subscribe(x`
    //   (validate) => {
    //     if (validate === '1') {
    //       this.formGroup.get('playerName').setValidators([Validators.required, Validators.minLength(3)]);
    //       this.titleAlert = 'You need to specify at least 3 characters';
    //     } else {
    //       this.formGroup.get('playerName').setValidators(Validators.required);
    //     }
    //     this.formGroup.get('playerName').updateValueAndValidity();
    //   }
    // );

    this.formGroup.get('validate').valueChanges.subscribe();
  }
  get playerName() {
    return this.formGroup.get('playerName') as FormControl;
  }
  get team() {
    return this.formGroup.get('team') as FormControl;
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.teamOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterPlayers(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.playerOptions.filter(option => option.toLowerCase().includes(filterValue));
    // return this.playerOptions.filter(option => option.filter(x => x.toLowerCase().includes(filterValue)) );
  }
  onSubmit(post) {
    console.table(post);
    this.points = post.run;
    this.calculate(post);
    const playerPerformance: PointData = {
      playerName: post.playerName,
      teamName: post.team,
      points: this.points,
      match: 1,
      playerType: post.capBonus
    };
    this.pointsDataService.addPlayerPerformance(playerPerformance);
  }

  calculate(data) {
    this.points = 0 ;
    if (data.run) {
      const battingBonus = this.calculateBattingBonus(data.run);
      this.points = this.points + data.run + battingBonus;
    }
    if (data.wicket) {
      const wicketBonus = this.calculateWicketBonus(data.wicket);
      this.points = this.points + (data.wicket * 25) + wicketBonus;
    }
    if (data.dotball) {
      const dotballBonus = this.calculateDotBallBonus(data.dotball);
      this.points = this.points + data.dotball + dotballBonus;
    }
    if (data.catch) {
      this.points = this.points + (data.catch * 10);
    }
    if (data.stumping) {
      this.points = this.points + (data.stumping * 10);
    }
    if (data.maiden) {
      this.points = this.points + (data.maiden * 30);
    }
    if (data.hattrick) {
      this.points = this.points + (data.hattrick * 150);
    }

    if (data.mom === '1') {
      this.points += 50;
    }

    if (data.capBonus) {
      const bonus = this.calculateExtraBonus(data.capBonus);
      this.points = this.points * bonus;
    }
  }

  calculateBattingBonus(runs: number): number {
    if (runs >= 200) {
      return 175;
    } else if (runs >= 175) {
      return 150;
    } else if (runs >= 150) {
      return 125;
    } else if (runs >= 125) {
      return 100;
    } else if (runs >= 100) {
      return 75;
    } else if (runs >= 75) {
      return 50;
    } else if (runs >= 50) {
      return 30;
    } else if (runs >= 30) {
      return 10;
    } else {
      return 0;
    }
  }

  calculateWicketBonus(wickets: number): number {
    if (wickets >= 6) {
      return 125;
    } else if (wickets >= 5) {
      return 100;
    } else if (wickets >= 4) {
      return 75;
    } else if (wickets >= 3) {
      return 50;
    } else if (wickets >= 2) {
      return 20;
    } else {
      return 0;
    }
  }

  calculateDotBallBonus(dots: number): number {
    if (dots > 20) {
      return 50;
    } else if (dots > 15) {
      return 40;
    } else if (dots > 10) {
      return 30;
    } else if (dots > 5) {
      return 20;
    } else {
      return 0;
    }
  }

  calculateExtraBonus(num: number): number {
    if (num <= 1 && num > 0) {
      return 2;
    } else if (num <= 2) {
      return 1.5;
    } else {
      return 1;
    }
  }

  teamSelected() {
    const teamChosen = this.formGroup.get('team').value;
    console.log('selected team');
  }
  onSelectionChange(event) {
    console.log('onSelectionChange called', event.option.value);
    // this.formGroup.controls.playerName.enable();
    const selectedTeam = event.option.value;
    this.playerOptions = this.teamDataService.getPlayersFromTeam(selectedTeam)[0];
    this.filteredPlayerOptions = this.playerName.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterPlayers(value))
    );
  }
}
