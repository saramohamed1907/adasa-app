import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Post, PostsData } from '../../interfaces/post.interface';
import postsData from '../../../assets/posts.json';
import { CategoryTabs } from '../category-tabs/category-tabs';

@Component({
  selector: 'app-landscape-posts',
  imports: [FormsModule, RouterLink, CategoryTabs],
  templateUrl: './landscape-posts.html',
  styleUrl: './landscape-posts.css',
})
export class LandscapePosts {
  data: PostsData = postsData;

  posts: Post[] = this.data.posts.filter((post) => post.category === 'مناظر طبيعية');

  searchQuery: string = '';
  viewMode: 'grid' | 'list' = 'grid';

  currentPage: number = 1;
  pageSize: number = 6;

  get filteredPosts(): Post[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.posts.filter((post) => {
      return (
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    });
  }

  get pages(): number[] {
    const totalPages = Math.max(1, Math.ceil(this.filteredPosts.length / this.pageSize));
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get paginatedPosts(): Post[] {
    const start: number = (this.currentPage - 1) * this.pageSize;
    return this.filteredPosts.slice(start, start + this.pageSize);
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.currentPage = 1;
  }
}
