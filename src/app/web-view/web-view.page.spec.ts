import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebViewPage } from './web-view.page';

describe('WebViewPage', () => {
  let component: WebViewPage;
  let fixture: ComponentFixture<WebViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WebViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
