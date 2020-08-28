import { Component, OnInit } from '@angular/core';
import { SearchService } from '../profile-service/search.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any;
  username: any = 'NyururuKelvin'

  constructor(private profileService:SearchService) {

   }

   findProfile(){
    this.profileService.updateProfile(this.username);

    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
    this.profile= profile      
    });

    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
    this.repos= repos;      
    
    })
  }

  ngOnInit(): void {
  }

}
