import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { ShakerComponent } from "./shaker.component";

describe("ShakerComponent", () => {
  let component: ShakerComponent;
  let fixture: ComponentFixture<ShakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShakerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
