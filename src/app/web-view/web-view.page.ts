import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-web-view',
  templateUrl: 'web-view.page.html',
})
export class WebViewPage implements OnInit {
  constructor(private inAppBrowser: InAppBrowser) {}

ngOnInit(): void {
	this.openWebView();
  // Coloca aquí la lógica de inicialización
  // Por ejemplo, puedes realizar una llamada a una API, configurar observadores, etc.
}

  openWebView() {
    const browser = this.inAppBrowser.create('http://192.168.20.8:8000/login', '_self', 'location=no,clearcache=yes,clearsessioncache=yes');
  }
}
