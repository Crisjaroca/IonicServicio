import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayPosts:any;

  constructor(public navCtrl: NavController, public postServices:PostServiceProvider) {

  }

  ionViewDidLoad() {
    this.getPosts();
  }

  getPosts() {
    this.postServices.getPosts()
    .then((data: any) => {
      this.arrayPosts = data;
    });
  }

}
