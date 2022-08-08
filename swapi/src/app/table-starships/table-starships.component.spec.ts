import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStarshipsComponent } from './table-starships.component';

describe('TableStarshipsComponent', () => {
  let component: TableStarshipsComponent;
  let fixture: ComponentFixture<TableStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStarshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
