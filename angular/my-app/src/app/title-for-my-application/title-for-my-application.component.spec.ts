import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleForMyApplicationComponent } from './title-for-my-application.component';

describe('TitleForMyApplicationComponent', () => {
  let component: TitleForMyApplicationComponent;
  let fixture: ComponentFixture<TitleForMyApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleForMyApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleForMyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
