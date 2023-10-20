import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
              private alertService:AlertController,
              private loadingController:LoadingController,
              private toastController:ToastController,
              private modalController:ModalController
              ) { }

    sumar(val1:number,val2:number){
      var result = val1 + val2;
      return result;
    }


    async showAlert(msg:string,title:string){
      var alert = await this.alertService.create({cssClass:"alertClass",header:title,message:msg ,buttons:['Aceptar']})
      await alert.present();
      return alert;
    }

    async showConfirm(msg:string,btn_confirmar:string,btn_cancelar:string){
      let promise = new Promise<boolean>(async (resolve) =>
      {
        var alert = await this.alertService.create(
          {
            cssClass:"confirmarCss",
            message:msg,
            buttons:
            [
              {
                text:btn_confirmar,
                handler:() =>{
                  resolve(true);
                }
              },
              {
                text:btn_cancelar,
                handler:() =>{
                  resolve(false);
                }
              }
            ]
          })
          await alert.present();
      });
      return promise;
    }



    async showLoading(msg:string){
      var loader = await this.loadingController.create(
        {
          cssClass:"loaderCss",message:msg,translucent:true
        });
      await loader.present();
      return loader;
    }


    async showToast(msg:string, duracion:number = 3000){
      var toast = await this.toastController.create(
      {
        cssClass:"toastCss",
        position:'bottom',
        color:'dark',
        message:msg,
        duration:duracion
      })
      await toast.present();
      return toast;
    }
    


    async showModal(componente:any,props:any={},dismiss = false){
      var modal = await this.modalController.create({
        cssClass:"cssModal",
        component:componente,
        componentProps:props,
        backdropDismiss:dismiss
      })
      await modal.present();
    }

}
