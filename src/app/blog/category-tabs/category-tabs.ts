import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PostsData } from '../../interfaces/post.interface';
import postsData from '../../../assets/posts.json';

@Component({
  selector: 'app-category-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category-tabs.html',
  styleUrl: './category-tabs.css',
})
export class CategoryTabs {
  data: PostsData = postsData;
}
