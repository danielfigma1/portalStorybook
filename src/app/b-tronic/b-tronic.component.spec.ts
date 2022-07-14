import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTronicComponent } from './b-tronic.component';

describe('BTronicComponent', () => {
  let component: BTronicComponent;
  let fixture: ComponentFixture<BTronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTronicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
