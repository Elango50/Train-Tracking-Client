import { Component, OnInit } from '@angular/core';
import { TrainApiServiceService } from '../train-api-service.service';
import { Train } from '../train';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-train',
  templateUrl: './find-train.component.html',
  styleUrls: ['./find-train.component.scss']
})
export class FindTrainComponent implements OnInit {

  public trainList : Train[];
  
  constructor(public apiService : TrainApiServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  public getTrainList(stationCode) {

    this.apiService.getTrains(stationCode).subscribe((res)=> {
        this.trainList = res
        }); 
  }

  public getLiveStatus(trainId) {
    this.route.navigateByUrl('/live-train?id=' + trainId);
    //this.selectedContact = contact;
  }

}
