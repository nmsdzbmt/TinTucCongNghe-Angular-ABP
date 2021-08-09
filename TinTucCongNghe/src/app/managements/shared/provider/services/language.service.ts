import { Injectable } from "@angular/core";
import * as _ from "lodash";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  private manyLanguage = [
    {
      id: "vi",
      icon: "/assets/images/flags/Vietnam.png",
      name: "Tiếng Việt"
    },
    {
      id: "en-US",
      icon: "/assets/images/flags/English.png",
      name: "Tiếng Anh"
    },
    // {
    //   id: "zh-CN",
    //   icon: "/assets/images/flags/China.png",
    //   name: "中国人"
    // }
  ];
  constructor() {}
  getAllLanguage() {
    return this.manyLanguage;
  }
}
