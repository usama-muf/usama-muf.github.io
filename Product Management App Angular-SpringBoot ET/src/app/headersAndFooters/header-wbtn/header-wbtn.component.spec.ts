import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWbtnComponent } from './header-wbtn.component';

describe('HeaderWbtnComponent', () => {
  let component: HeaderWbtnComponent;
  let fixture: ComponentFixture<HeaderWbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
