import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAnAgentComponent } from './become-an-agent.component';

describe('BecomeAnAgentComponent', () => {
  let component: BecomeAnAgentComponent;
  let fixture: ComponentFixture<BecomeAnAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeAnAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAnAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
