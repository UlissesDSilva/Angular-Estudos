import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlanetsComponent } from './table-planets.component';

describe('TablePlanetsComponent', () => {
  let component: TablePlanetsComponent;
  let fixture: ComponentFixture<TablePlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
