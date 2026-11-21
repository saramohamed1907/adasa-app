import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPage } from './found-page';

describe('FoundPage', () => {
  let component: FoundPage;
  let fixture: ComponentFixture<FoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
