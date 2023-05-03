import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableByPagesComponent } from './table-by-pages.component';

describe('TableByPagesComponent', () => {
  let component: TableByPagesComponent;
  let fixture: ComponentFixture<TableByPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableByPagesComponent]
    });
    fixture = TestBed.createComponent(TableByPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
