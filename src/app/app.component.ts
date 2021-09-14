import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularSimpleProject';
  datetime!: string;
  constructor(private readonly service: ServiceService){}

  ngOnInit(){
    this.service.fetchData().subscribe(res=>{
      console.log(res.datetime);
this.datetime= res.datetime
    })
  }

}
