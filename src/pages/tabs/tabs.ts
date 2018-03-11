import { ListPage } from './../list/list.page';
import { PicturePage } from './../picture/picture.page';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PicturePage;
  tab2Root = ListPage;

  constructor() {

  }
}
