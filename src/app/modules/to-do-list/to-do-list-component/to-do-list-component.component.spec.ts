import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponentComponent } from './to-do-list-component.component';

describe('ToDoListComponentComponent', () => {
  let component: ToDoListComponentComponent;
  let fixture: ComponentFixture<ToDoListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
