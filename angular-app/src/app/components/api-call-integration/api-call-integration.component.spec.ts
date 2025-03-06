import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallIntegrationComponent } from './api-call-integration.component';

describe('ApiCallIntegrationComponent', () => {
  let component: ApiCallIntegrationComponent;
  let fixture: ComponentFixture<ApiCallIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCallIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCallIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
