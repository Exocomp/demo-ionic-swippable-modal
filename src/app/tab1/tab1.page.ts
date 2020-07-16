import { Component } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { Modal1Page } from '../modals/modal1/modal1.page';
import { Modal2Page } from '../modals/modal2/modal2.page';
import { Modal3Page } from '../modals/modal3/modal3.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController, private routerOutlet: IonRouterOutlet) {}

  async presentModal1() {
    const modal = await this.modalController.create({
      component: Modal1Page,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: Modal2Page,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async presentModal3() {
    const modal = await this.modalController.create({
      component: Modal3Page,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
