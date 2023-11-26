import { Component , OnInit  } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css'
})
export class LocationListComponent implements OnInit {
  locations: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.rickAndMortyService.getLocations().subscribe(
      (data: any) => {
       
        this.locations = data.results.filter((location: { id: number; }) => location.id % 2 === 0);
      },
      error => {
        console.error('Error fetching locations:', error);
      }
    );
  }

}
