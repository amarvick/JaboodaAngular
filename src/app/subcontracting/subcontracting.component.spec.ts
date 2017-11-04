import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontractingComponent } from './subcontracting.component';

describe('SubcontractingComponent', () => {
  let component: SubcontractingComponent;
  let fixture: ComponentFixture<SubcontractingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcontractingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontractingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
