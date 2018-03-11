import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ListInterface } from '../../interfaces/list.interface';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'detail-list',
  templateUrl: './detail-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailListComponent implements OnInit {
  listData: ListInterface;
  
  constructor(private params: NavParams, private viewCtrl: ViewController) { }

  ngOnInit() {
    this.listData = this.params.data as ListInterface;
  }

  return(){
    this.viewCtrl.dismiss()
  }

}
