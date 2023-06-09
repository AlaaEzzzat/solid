import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OComponent } from './o.component';

describe('OComponent', () => {
  let component: OComponent;
  let fixture: ComponentFixture<OComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
