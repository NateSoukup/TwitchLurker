import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  

  constructor(private route: ActivatedRoute) { }


  // Gives a 404 error when run from the service.
  login(document: { location: { href: any; }; }): any {
    const responseType: string = "token+id_token";
    const clientID: string = "pvi6jyq9ufy3ld6rxsid9ad7ewpcqw";
    const uri: string = "http://localhost:4200/home";
    const scope: string = "viewing_activity_read+openid";
    const claims: string = "{%22id_token%22:{%22email_verified%22:null";
    const authURL: string = "https://id.twitch.tv/oauth2/authorize"+'&response_type='+ responseType + "&client_id=" + clientID + "&redirect_uri=" + uri + "&scope=" + scope + "&claims=" + claims
    
    document.location.href = (authURL);
  }

  saveToken(): string {
    return "what"
  }
}
