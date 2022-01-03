import { Component, OnInit } from '@angular/core';

// TODO filters we import the line below
import { MatTableDataSource } from '@angular/material/table';

//create table data definations
export interface PatientDetails{
  name:string;
  gender:string;
  weight:number;
  town:string;
  tel:number;

}


// now using the above model,add some data
const PATIENT_DATA :PatientDetails[] = [
  {name:"John", gender:"Male", weight:50 , town:"Thika", tel:2547997835},
  {name:"Mary", gender:"Female", weight:45 ,town:"Embu", tel:25476754312},
  {name:"Tony", gender:"Male", weight:65 , town:"Meru", tel:25479735567},
  {name:"Samantha", gender:"Female", weight:75 , town:"Nakuru", tel:254752432790},
  {name:"Lydia", gender:"Female" , weight:70 , town:"Mombasa", tel:254752783020}
];


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
// any data that should to the html template should be defined here
   dataSource = new MatTableDataSource (PATIENT_DATA);    // load our data source

   // apply a filter
   applyFilter(event:Event){
    //  get value from user input
     const filterValue =(event.target as HTMLInputElement).value
     //filter with that value
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   //specify columns to display
   displayedColumns: string[] =['name', 'gender', 'weight', 'town','tel'];
  constructor() { }



  ngOnInit(): void {
  }

}
