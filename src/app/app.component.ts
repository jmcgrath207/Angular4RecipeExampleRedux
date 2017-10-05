import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  loadFeature= 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBHgxHtp39dTl74kfEJ51xvY9kSgiB_CJk',
      authDomain: 'angular4recipe.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
}
