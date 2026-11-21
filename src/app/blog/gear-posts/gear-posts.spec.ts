import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearPosts } from './gear-posts';

describe('GearPosts', () => {
  let component: GearPosts;
  let fixture: ComponentFixture<GearPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(GearPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
