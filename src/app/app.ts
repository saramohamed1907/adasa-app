import { ViewportScroller } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { BlogDetails } from './blog-details/blog-details';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Blog, BlogDetails, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 100]);
  }

  protected readonly title = signal('Adasa-app');
}
