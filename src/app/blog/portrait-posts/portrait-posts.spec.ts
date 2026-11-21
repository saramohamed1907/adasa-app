import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitPosts } from './portrait-posts';

describe('PortraitPosts', () => {
  let component: PortraitPosts;
  let fixture: ComponentFixture<PortraitPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortraitPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(PortraitPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
