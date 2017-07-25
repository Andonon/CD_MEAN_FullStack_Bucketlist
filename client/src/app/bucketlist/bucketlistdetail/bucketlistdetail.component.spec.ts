import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistdetailComponent } from './bucketlistdetail.component';

describe('BucketlistdetailComponent', () => {
  let component: BucketlistdetailComponent;
  let fixture: ComponentFixture<BucketlistdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
