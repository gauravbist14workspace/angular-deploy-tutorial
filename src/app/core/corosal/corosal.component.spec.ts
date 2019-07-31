import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorosalComponent } from './corosal.component';

describe('CorosalComponent', () => {
  let component: CorosalComponent;
  let fixture: ComponentFixture<CorosalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorosalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
