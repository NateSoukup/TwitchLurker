import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  login(): void {
    const responseType: string = "token+id_token";
    const clientID: string = "pvi6jyq9ufy3ld6rxsid9ad7ewpcqw";
    const uri: string = "http://localhost:4200/home";
    const scope: string = "viewing_activity_read+openid";
    const claims: string = "{%22id_token%22:{%22email_verified%22:null";
    const authURL: string = "https://id.twitch.tv/oauth2/authorize"+'?response_type='+ responseType + "&client_id=" + clientID + "&redirect_uri=" + uri + "&scope=" + scope + "&claims=" + claims

    // Call with const parameters
    this.document.location.href = (authURL);

    // Call it with twitchService Instead.
    // GIVES A 404 ERROR
    // this.twitchService.login(this.document)

    // Original Call
    //this.document.location.href = ('https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=pvi6jyq9ufy3ld6rxsid9ad7ewpcqw&redirect_uri=http://localhost:4200/home&scope=viewing_activity_read+openid&claims={%22id_token%22:{%22email_verified%22:null');
  }

}
