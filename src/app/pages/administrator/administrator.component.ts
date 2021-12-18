import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  close: boolean; menu: boolean; visibility: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver
    ) {
      this.close = true;
      this.menu = false;
      this.visibility = true;
    }

    closeSideNav(){
      this.close = false;
      this.menu = true;
      this.visibility = false;
    }

    openSideNav(){
      this.close = true;
      this.menu = false;
      this.visibility = true;
    }

}
