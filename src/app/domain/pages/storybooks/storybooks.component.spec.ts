import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybooksComponent } from './storybooks.component';

describe('StorybooksComponent', () => {
  let component: StorybooksComponent;
  let fixture: ComponentFixture<StorybooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorybooksComponent]
    });
    fixture = TestBed.createComponent(StorybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
