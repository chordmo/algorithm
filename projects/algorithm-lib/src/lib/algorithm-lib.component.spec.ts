import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmLibComponent } from './algorithm-lib.component';

describe('AlgorithmLibComponent', () => {
  let component: AlgorithmLibComponent;
  let fixture: ComponentFixture<AlgorithmLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
