import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  laboratory = "Clinical Laboratory Science, also called Medical Laboratory Science or Medical Technology, is the health profession that provides laboratory information and services needed for the diagnosis and treatment of disease. "
  painkiller = " They  relieve pain from headache, backache and stomach aches.They should not be used for long periods unless you have discussed it with your doctor."
  antibiotic = "Helicobacter pylori(H. pylori) is a type of bacteria. These germs can enter your body and live in your digestive tract."
  constructor() { }

  ngOnInit(): void {
  }

}
