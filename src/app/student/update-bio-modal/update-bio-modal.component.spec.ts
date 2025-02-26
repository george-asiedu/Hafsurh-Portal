import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBioModalComponent } from './update-bio-modal.component';

describe('UpdateBioModalComponent', () => {
  let component: UpdateBioModalComponent;
  let fixture: ComponentFixture<UpdateBioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBioModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
