import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private service:MovieApiServiceService){}

  bannerResult:any=[];
  trendingResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.advenetureMovies();
    this.animationMovies();
    this.comedyMovies();
    this.documentaryMovies();
    this.scienceMovies();
    this.thrillerMovies();
  }
  // banner data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      this.bannerResult = result.results;
    })
  }

  // trending moviesData
  trendingData(){
    this.service.trendingMoviesApiData().subscribe((result=>{
      this.trendingResult = result.results
      console.log(result, 'trendingresult');
    }))
  }

  // action
  actionMovies(){
    this.service.fetchActionMovies().subscribe(result=>{
      this.actionMovieResult = result.results;
    })
  }

  // adventure
  advenetureMovies() {
    this.service.fetchAdventureMovies().subscribe(result => {
      this.adventureMovieResult = result.results;
    });
  }

  // animation
  animationMovies() {
    this.service.fetchAnimationMovies().subscribe(result => {
      this.animationMovieResult = result.results;
    });
  }

  // comedy
  comedyMovies() {
    this.service.fetchComedyMovies().subscribe(result => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary
  documentaryMovies() {
    this.service.fetchDocumentaryMovies().subscribe(result => {
      this.documentaryMovieResult = result.results;
    });
  }

  // science
  scienceMovies() {
    this.service.fetchScienceMovies().subscribe(result => {
      this.scienceMovieResult = result.results;
    });
  }

  // animation
  thrillerMovies() {
    this.service.fetchThrillerMovies().subscribe(result => {
      this.thrillerMovieResult = result.results;
    });
  }

  

}
