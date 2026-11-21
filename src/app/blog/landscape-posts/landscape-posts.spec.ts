import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapePosts } from './landscape-posts';

describe('LandscapePosts', () => {
  let component: LandscapePosts;
  let fixture: ComponentFixture<LandscapePosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapePosts],
    }).compileComponents();

    fixture = TestBed.createComponent(LandscapePosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
