import { Injectable } from '@angular/core';

declare var MathJax: any;

@Injectable({
  providedIn: 'root'
})
export class MathjaxService {

  constructor() { }

  active(element) {
    if(element != null)
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
    else
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }
}
