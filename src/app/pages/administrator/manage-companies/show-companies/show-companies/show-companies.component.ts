import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrls: ['./show-companies.component.css']
})
export class ShowCompaniesComponent implements OnInit {

  companies!: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.companies = [
      { "id": 1, "name": "Bimbo", "logo": "https://th.bing.com/th/id/R.7ef2a30513a59882a7600a3820e36d14?rik=PubmZ3HW3oSnCw&riu=http%3a%2f%2f1.bp.blogspot.com%2f_ENeHebeiVx0%2fSwJGcWmPRaI%2fAAAAAAAAAA0%2f8iRJ-Vft9aU%2fs1600%2flogo_bimbo_ok.jpg&ehk=%2fd%2fa6x0%2bQuNmtS6BXF92hfrIjeUkchtxf8W5AQlCj3Q%3d&risl=&pid=ImgRaw&r=0" },
      { "id": 2, "name": "Gmail", "logo": "https://www.subarnabhandari.com/wp-content/uploads/2021/05/Google-Gmail.png" },
      { "id": 3, "name": "Pepsi", "logo": "hola" },
      { "id": 10, "name": "Lenovo", "logo": "https://th.bing.com/th/id/OIP.KUvxFuZBrt6C19NhVoHlFQHaHy?pid=ImgDet&rs=1" },
      { "id": 4, "name": "Colgate", "logo": "hola" },
      { "id": 5, "name": "Cemex", "logo": "https://th.bing.com/th/id/R.ff8792b74933f15b7c6bd2baca7bca6f?rik=LOTGawNhHte5Ew&riu=http%3a%2f%2f4vector.com%2fi%2ffree-vector-cemex_086806_cemex.png&ehk=Nq3fhWbH9AGvbzTzCP5la1GPZhU3fdOw9zbCdrwz6q4%3d&risl=&pid=ImgRaw&r=0" },
      { "id": 6, "name": "Uber Eats", "logo": "https://static-pepper.dealabs.com/threads/thread_full_screen/default/2057360_2.jpg" },
      { "id": 7, "name": "Reebok", "logo": "https://th.bing.com/th/id/OIP.fORXcyeYIG79gtfIph1yOgHaHa?pid=ImgDet&rs=1" },
      { "id": 8, "name": "Audi", "logo": "https://th.bing.com/th/id/OIP.tXVCaTCopd0h13AoHuIh8QHaFj?pid=ImgDet&rs=1" },
      { "id": 9, "name": "Mars & Murrie", "logo": "https://th.bing.com/th/id/OIP.DsGXagUy_wwatiODxN_UigHaHa?pid=ImgDet&w=1000&h=1000&rs=1" }
    ]
  }

  selectCompany(id: string){
    sessionStorage.setItem('Company',id);
    alert("id:" + id);
    //this.router.navigate(['cliente/discos']);
  }
}