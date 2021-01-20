import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // accessToken_snap =  "No Access Token";
  // accessToken_sub = "No Access Token";
  // idToken_snap = "No Access Token";
  // idToken_sub = "No Access Token";

  accessToken_snap: any;
  accessToken_sub: any;
  idToken_snap: any;
  idToken_sub: any;

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.has("access_token"));
    console.log(this.route.url);
    console.log(this.route.queryParams);
    
    document.location.hash;
    this.route.snapshot.fragment;
    const urlparams = new URLSearchParams(this.route.snapshot.fragment);
    this.accessToken_snap = urlparams.get("access_token");
    this.idToken_snap = urlparams.get("id_token");

    console.log(this.accessToken_snap)
    console.log(urlparams);
    console.log(urlparams.has("access_token"));

    console.log("fuck")

  }

  getTokens(): void { 

    // Snapshot
    this.accessToken_snap = this.route.snapshot.paramMap.get("access_token") || "Failed to access Token";
    this.idToken_snap = this.route.snapshot.paramMap.get("id_token") || "Failed to access Id Token";
    
    // Subscribed
    this.route.paramMap.subscribe({
      next: params => {
      this.accessToken_sub = params.get("access_token") || "Failed to access Token";
      }
    })
    this.route.paramMap.subscribe({
      next: params => {
      this.idToken_sub = params.get("id_token") || "Failed to access Id Token";
      }
    })
  }

  }


