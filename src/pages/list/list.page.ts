import { ListInterface } from './../../interfaces/list.interface';
import { ListService } from './../../services/list.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoadingController, Loading, ModalController } from 'ionic-angular';
import { DetailListComponent } from '../../components/detail-list/detail-list.component';

@Component({
  selector: 'list-page',
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPage implements OnInit, OnDestroy {
 
  itemsList:Array<any> = [];
  subscription: Subscription;
  constructor(
    private _listService: ListService, 
    private _changeMark: ChangeDetectorRef,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
   const loading = this._createLoading(); 
   this.subscription = this._listService.getList().subscribe( (res:any) =>{
                            this.itemsList = res;
                            this._changeMark.markForCheck();
                            loading.dismiss();
                        });
  }

  private _createLoading(): Loading{
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    return loading;
  }

  goToDetail(item: ListInterface){
    let profileModal = this.modalCtrl.create(DetailListComponent,item);
    profileModal.present();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
