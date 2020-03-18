import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  items:Array<any> = []
  SHOW_END_ICONS: boolean;
  SHOW_START_ICONS: boolean;
  START_DATE_ASC: boolean;
  END_DATE_ASC: boolean;
  startdate: Date = new Date();
  enddate: Date = new Date();
  filitem: Array<any> = []
  original: Array<any> = []
  constructor(private dataService: DataService,){ }
  ngOnInit() {
    this.dataService.getLocation().subscribe((data) => {
     this.items = data
     this.original = data
    },
    err => console.log(err))
  }

  sortByDate(sortByColumn) {
    this.SHOW_START_ICONS = false;
    this.SHOW_END_ICONS = true;
    if (sortByColumn === 'startdate') {
      if (this.START_DATE_ASC == true) {
        this.items.sort((a, b) => { return <any>new Date(b.start_date) - <any>new Date(a.start_date); });
      } else {
        this.items.sort((a, b) => { return <any>new Date(a.start_date) - <any>new Date(b.start_date); });
      }
      this.START_DATE_ASC = !this.START_DATE_ASC;
    } else {
      this.SHOW_START_ICONS = true;
      this.SHOW_END_ICONS = false;
      if (this.END_DATE_ASC == true) {
        this.items.sort((a, b) => { return <any>new Date(b.end_date) - <any>new Date(a.end_date); });
      } else {
        this.items.sort((a, b) => { return <any>new Date(a.end_date) - <any>new Date(b.end_date); });
      }

      this.END_DATE_ASC = !this.END_DATE_ASC;
    }
  }
  filtertable(){
    let sdate = new Date(this.startdate);
    let edate = new Date(this.enddate);
    this.filitem = this.items.filter(t=>t.start_date >= sdate.toISOString() && t.end_date <= edate.toISOString());
    this.items = Object.assign(this.filitem)
  }
  reset(){
    this.items = Object.assign(this.original)
    this.startdate = null;
    this.enddate = null
  }

}
