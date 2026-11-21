import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { AllPosts } from './blog/all-posts/all-posts';
import { LightingPosts } from './blog/lighting-posts/lighting-posts';
import { PortraitPosts } from './blog/portrait-posts/portrait-posts';
import { LandscapePosts } from './blog/landscape-posts/landscape-posts';
import { TechniquesPosts } from './blog/techniques-posts/techniques-posts';
import { GearPosts } from './blog/gear-posts/gear-posts';
import { BlogDetails } from './blog-details/blog-details';
import { About } from './about/about';
import { FoundPage } from './found-page/found-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home, title: 'الرئيسة' },

  {
    path: 'blog',
    component: Blog,
    title: 'المدونة',
    children: [
      { path: '', redirectTo: 'جميع المقالات', pathMatch: 'full' },
      { path: 'جميع المقالات', component: AllPosts, title: 'عدسة | جميع المقالات' },
      { path: 'إضاءة', component: LightingPosts, title: 'عدسة | إضاءة' },
      { path: 'بورتريه', component: PortraitPosts, title: 'عدسة | بورتريه' },
      { path: 'مناظر طبيعية', component: LandscapePosts, title: 'عدسة | مناظر طبيعية' },
      { path: 'تقنيات', component: TechniquesPosts, title: 'عدسة | تقنيات' },
      { path: 'معدات', component: GearPosts, title: 'عدسة | معدات' },
    ],
  },

  { path: 'blog-details', component: BlogDetails, title: 'عدسة | تفاصيل المقال' },

  { path: 'blog-details/:id', component: BlogDetails, title: 'عدسة | تفاصيل المقال' },

  { path: 'about', component: About, title: 'عدسة | من نحن' },

  { path: 'foundPage', component: FoundPage, title: 'الصفحة غير موجودة' },

  { path: '**', redirectTo: 'foundPage' },
];
