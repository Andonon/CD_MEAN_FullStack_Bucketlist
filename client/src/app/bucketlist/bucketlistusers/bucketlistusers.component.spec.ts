import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistusersComponent } from './bucketlistusers.component';

describe('BucketlistusersComponent', () => {
  let component: BucketlistusersComponent;
  let fixture: ComponentFixture<BucketlistusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
