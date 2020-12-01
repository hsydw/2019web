import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyosuComponent } from './gyosu.component';

describe('GyosuComponent', () => {
  let component: GyosuComponent;
  let fixture: ComponentFixture<GyosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
