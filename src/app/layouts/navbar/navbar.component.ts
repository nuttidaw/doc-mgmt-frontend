import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService, UserLoginService } from '@app/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarService } from '@app/core/services/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isSearchDocument: Boolean = false;
  isReports: Boolean = false;
  isPt103: Boolean = false;
  isAMLR01: Boolean = false;
  isAMLR02: Boolean = false;
  isAMLR03: Boolean = false;
  isAMLR04: Boolean = false;
  isAMLR05: Boolean = false;
  isImportExport: Boolean = false;
  isImport: Boolean = false;
  isExport: Boolean = false;
  isExportXML: Boolean = false;
  isAuditLog: Boolean = false;
  isSetting: Boolean = false;
  isRole: Boolean = false;
  isUser: Boolean = false;
  isReference: Boolean = false;
  isSchema: Boolean = false;
  isSysParams: Boolean = false;
  isInternal: Boolean = false;
  isExclude: Boolean = false;
  isSearchActiveClass: Boolean = false;
  isDocumentActiveClass: Boolean = false;
  lastPing?: Date = null;

  constructor(private router: Router,
    public authService: AuthService,
    public userLoginService: UserLoginService,
    public navbarService: NavbarService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /*this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.split('/')[1] === 'search') {
          this.isSearchActiveClass = true;
          this.isDocumentActiveClass = false;
        } else if (event.url.split('/')[1] === 'document101' && event.url.split('/')[3]) {
          this.isSearchActiveClass = true;
          this.isDocumentActiveClass = false;
        } else if ((event.url.split('/')[1] === 'document101' || event.url.split('/')[1] === 'document102' ||
          event.url.split('/')[1] === 'document103' || event.url.split('/')[1] === 'document1059')
          && event.url.split('?')[1]) {
          this.isSearchActiveClass = false;
          this.isDocumentActiveClass = true;
        } else {
          this.isSearchActiveClass = false;
          this.isDocumentActiveClass = false;
        }
      }
    });*/
  }

  setSessionExpire(data: any): number {
    if (!data) {
      return 10;
    } else {
      return +data.codeValue * 60;
    }
  }

  setActiveSearchClass() {
    this.isSearchActiveClass = true;
    this.isDocumentActiveClass = false;
  }

  setActiveDocumentClass() {
    this.isSearchActiveClass = false;
    this.isDocumentActiveClass = true;
  }

  setClearActiveClass() {
    this.isSearchActiveClass = false;
    this.isDocumentActiveClass = false;
  }

  redirectTo(uri: any, params: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([uri], { queryParams: { refresh: params } });
    });
  }

  docPath(route: any) {
    this.redirectTo(route, btoa('true'));
  }

  settingProfile() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/setting-profile']);
    });
  }

}
