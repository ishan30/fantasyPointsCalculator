import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionTeams } from 'src/assets/auctionteams';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  teams = [
    {
        teamName: 'Semicolon Spartans (Ishan)',
        teamPlayers: [
            'Shreyas Iyer',
            'Steve Smith',
            'Kagiso Rabada',
            'Rohit Sharma',
            'Eoin Morgan',
            'Karun Nair',
            'Tom Curran',
            'Umesh Yadav',
            'Sarfaraz Khan',
            'Manan Vohra',
            'Manish Pandey',
            'Dinesh Karthik',
            'Kedar Jadhav',
            'Billy Stanlake',
            'Krunal Pandya',
            'Pawan Negi',
            'Shahbaz Nadeem',
            'Ankit Rajpoot',
        ]
    },
    {
        teamName: 'Sharma Ji KL (Aditya)',
        teamPlayers: [
          'Andre Russell',
          'Rishabh Pant',
          'KL Rahul',
          'Tom Banton',
          'Aaron Finch',
          'Lasith Malinga',
          'Marcus Stoinis',
          'Murugan Ashwin',
          'Kane Williamson',
          'Shardul Thakur',
          'Harbhajan Singh',
          'Jimmy Neesham',
          'Krishnappa Gowtham',
          'Vijay Shankar',
          'Washington Sundar',
          'Kuldeep Yadav',
          'Varun Aaron',
          'Wriddhiman Saha',
        ]
    },
    {
      teamName: 'Formidable Fuckers (Harsh)',
      teamPlayers: [
        'Ben Stokes',
        'Riyan Parag',
        'Josh Philippe',
        'Jonny Bairstow',
        'Lungi Ngidi',
        'Nathan Coulter-Nile',
        'Moeen Ali',
        'Mujeeb Ur Rehman',
        'Shikhar Dhawan',
        'Devdutt Padikkal',
        'Alex Carey',
        'Quinton de Kock',
        'Parthiv Patel',
        'Sheldon Cottrell',
        'Trent Boult',
        'R Chahar',
        'Rahul Tripathi',
        'Prasidh Krishna',
      ]
  },
  {
    teamName: 'KMAW Spartans (Naisarg)',
    teamPlayers: [
      'AB de Villiers',
      'Jasprit Bumrah',
      'MS Dhoni',
      'Ishan Kishan',
      'Kartik Tyagi',
      'Mohommad Shami',
      'Deepak Chahar',
      'Shreyas Gopal',
      'Imran Tahir',
      'David Miller',
      'Dale Steyn',
      'Sam Curran',
      'Hardik Pandya',
      'Amit Mishra',
      'Sandeep Lamichhane',
      'Ravi Bishnoi',
      'Chris Woakes',
      'Mitchel Santner',
    ]
},
{
  teamName: 'WIMWI WARRIORS (Parth)',
  teamPlayers: [
    'Rashid Khan',
    'Yuzvendra Chahal',
    'Virat Singh',
    'Shubman Gill',
    'Mayank Agarwal',
    'Ishan Porel',
    'Josh Hazlewood',
    'Siddharth Kaul',
    'Mohommad Nabi',
    'Piyush Chawla',
    'Sunil Narine',
    'Chris Morris',
    'Keemo Paul',
    'Ravindra Jadeja',
    'Prithvi Shaw',
    'Jaydev Unadkat',
    'Yashasvi Jaiswal',
    'Sandeep Sharma',
  ]
},
{
  teamName: 'Viral',
  teamPlayers: [
    'Virat Kohli',
'Kieron Pollard',
'David Warner',
'Pat Cummins',
'Shane Watson',
'Jos Buttler',
'Chris Lynn',
'Priyam Garg',
'Robin Uthappa',
'Ambati Rayudu',
'Kamlesh Nagarkoti',
'Shivam Dube',
'Dwyane Bravo',
'Mayank Markande',
'Jason Roy',
'Mandeep Singh',
'Andrew Tye',
  ]
}, {
  teamName: 'Slaying Slytherins (Yash)',
  teamPlayers: [
    'Chris Gayle',
    'Suresh Raina',
    'Bhuvneshwar Kumar',
    'Glenn Maxwell',
    'Suryakumar Yadav',
    'Nitish Rana',
    'Faf du Plessis',
    'Shimron Hetmyer',
    'Nicholas Pooran',
    'Navdeep Saini',
    'Mohit Sharma',
    'Khaleel Ahmed',
    'Ravichandran Ashwin',
    'Ajinkya Rahane',
    'Sanju Samson',
    'Axar Patel',
  ]
},
];
  constructor() { }
  public getTeams(): any {
    return  this.teams.map(
      item => item.teamName
    );
  }

  public getPlayersFromTeam(team: string): any {
    return this.teams
    .filter(item => item.teamName === team)
    .map(
      item => item.teamPlayers
    );
  }
}
