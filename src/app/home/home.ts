import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import postsData from '../../assets/posts.json';
import { PostsData } from '../interfaces/post.interface';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data: PostsData = postsData;

  get latestPosts() {
    return this.data.posts.filter((post) => !post.featured).slice(0, 3);
  }
}
