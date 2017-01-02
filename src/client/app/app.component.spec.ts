
import { ComponentFixture, TestBed,async  } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent (templateUrl)', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent], // declare the app component
       schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();  // compile template and css
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    
    de = fixture.debugElement.query(By.css('router-outlet'));
    el = de.nativeElement;
  });

 it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

//   it('should display a different test title', () => {
//     comp.title = 'Test Title';
//     fixture.detectChanges();
//     expect(el.textContent).toContain('Test Title');
//   });

  
});