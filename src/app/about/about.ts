import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsData } from '../interfaces/post.interface';
import postsData from '../../assets/posts.json';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  data: PostsData = postsData;
}
