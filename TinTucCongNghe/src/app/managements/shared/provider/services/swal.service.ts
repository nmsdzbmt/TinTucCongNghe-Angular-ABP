import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  build(icon, title, content, allowMethod, denyMethod?){
    swal({
      title: title,
      text: content,
      icon: icon,
      buttons: {
        cancel: "Từ chối",
        ok: {
          text: "Xác nhận",
          value: "ok",
        },
      },
      closeOnClickOutside: false,
    } as any).then(result => {
        if(result == 'ok'){
          allowMethod();
        }
        else if( result != 'ok' && denyMethod) denyMethod();
    })
  }

}
