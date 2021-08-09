import { Injectable } from '@angular/core';

import 'toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { 
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": true,
      //"onclick": null,
      "showDuration": 300,
      "hideDuration": 300,
      "timeOut": 2000,
      "extendedTimeOut": 1000,
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }

  success(message = 'SUCCESS', title?, option?) {
    toastr.success('Cập nhật thành công.', title, option);
  }

  error(message = 'ERROR', title?, option?) {
    toastr.error(message, title, option);
  }

  warning(message = 'WARNING', title?, option?) {
    toastr.warning(message, title, option);
  }

  info(message = 'INFO', title?, option?) {
    toastr.info(message, title, option);
  }

  clear() {
    toastr.clear();
  }
}
