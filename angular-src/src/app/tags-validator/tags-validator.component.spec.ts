import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsValidatorComponent } from './tags-validator.component';

describe('TagsValidatorComponent', () => {
  let component: TagsValidatorComponent;
  let fixture: ComponentFixture<TagsValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
