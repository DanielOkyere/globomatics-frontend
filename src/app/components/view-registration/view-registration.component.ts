import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg:any;
  constructor(private bikeService:BikeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikes(this.route.snapshot.params.id);
  }

  getBikes(id:number){
    this.bikeService.getBike(id).subscribe(
      data=>{
        this.bikeReg=data;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("bike registration details loaded");
      }
    )
  }

}
