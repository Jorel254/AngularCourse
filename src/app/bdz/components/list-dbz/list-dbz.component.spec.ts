import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDBZComponent } from './list-dbz.component';

describe('ListDBZComponent', () => {
  let component: ListDBZComponent;
  let fixture: ComponentFixture<ListDBZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDBZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDBZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
