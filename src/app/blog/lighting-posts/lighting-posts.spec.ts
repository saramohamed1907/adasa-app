import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingPosts } from './lighting-posts';

describe('LightingPosts', () => {
  let component: LightingPosts;
  let fixture: ComponentFixture<LightingPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightingPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(LightingPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
