import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoremComponent } from './my-lorem.component';

describe('MyLoremComponent', () => {
  let component: MyLoremComponent;
  let fixture: ComponentFixture<MyLoremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLoremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
