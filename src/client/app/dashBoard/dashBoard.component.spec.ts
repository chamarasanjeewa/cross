import { Component } from '@angular/core';
import { async,TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TestService} from '../services/user.service';
import {HomeComponent} from '../home/home.component';
// //import {Ng2GoogleChartModule} from 'ng2-googlechart';

// // import {
// //   BaseRequestOptions,
// //   ConnectionBackend,
// //   Http, HttpModule
// // } from '@angular/http';
// // import { MockBackend } from '@angular/http/testing';

//  import { DynamicFormComponent } from '../home/home.component';

// export function main() {
//    describe('HomeComponent', () => {
//      let component: DynamicFormComponent;
  
//      beforeEach(() => {
//        TestBed.configureTestingModule({
// //         imports: [FormsModule, RouterModule, HttpModule],
//          declarations: [DynamicFormComponent]//,
// //         providers: [
// //         //   NameListService,
// //         //   BaseRequestOptions,
// //         //   MockBackend,
// //         //   {provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
// //         //       return new Http(backend, defaultOptions);
// //         //     },
// //         //     deps: [MockBackend, BaseRequestOptions]
// //         //   },
// //         ]
//        });
//      });

//   const fixture = TestBed.createComponent(DynamicFormComponent);
//        //  component = fixture.componentInstance;

//  it('should have a defined component', () => {
//    expect(5).toBe(5);
//        //expect(component).toBeDefined();
//     });
//  });
// }
beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      // HttpModule, etc.
    ],
    providers: [
      // { provide: ServiceA, useClass: TestServiceA }
    ]
  });
});

it('should do something', async(() => {
  // Overrides here, if you need them
  TestBed.overrideComponent(HomeComponent, {
    set: {
      template: '<div>Overridden template here</div>'
      // ...
    }
  });


TestBed.compileComponents().then(() => {
    const fixture = TestBed.createComponent(HomeComponent);

    // Access the dependency injected component instance
    const app = fixture.componentInstance;

    expect(4).toBe(4);

    // Access the element
    const element = fixture.nativeElement;

    // Detect changes as necessary
    fixture.detectChanges();

    expect(element.textContent).toContain('something');
  });
  }));