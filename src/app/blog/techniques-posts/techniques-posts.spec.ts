import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniquesPosts } from './techniques-posts';

describe('TechniquesPosts', () => {
  let component: TechniquesPosts;
  let fixture: ComponentFixture<TechniquesPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechniquesPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(TechniquesPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
