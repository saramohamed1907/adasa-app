import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post, PostsData } from './../interfaces/post.interface';
import postsData from './../../assets/posts.json';

interface ContentSection {
  title: string;
  body: string;
}

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {
  data: PostsData = postsData;

  id = input('');
  get post(): Post {
    const num = Number(this.id());
    return this.data.posts.find((p) => p.id === num) ?? this.data.posts[0];
  }

  get intro(): string {
    return this.post.content.split('\n## ')[0].trim();
  }

  get sections(): ContentSection[] {
    return this.post.content
      .split('\n## ')
      .slice(1)
      .map((part) => {
        const [title, ...rest] = part.split('\n');
        return { title: title.trim(), body: rest.join('\n').trim() };
      });
  }
}
