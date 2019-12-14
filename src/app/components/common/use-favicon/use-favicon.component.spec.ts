import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFaviconComponent } from './use-favicon.component';

describe('UseFaviconComponent', () => {
  let component: UseFaviconComponent;
  let fixture: ComponentFixture<UseFaviconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseFaviconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFaviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
