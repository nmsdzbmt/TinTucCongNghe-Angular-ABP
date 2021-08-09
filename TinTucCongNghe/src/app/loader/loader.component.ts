import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef, HostListener } from '@angular/core';

import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show: boolean;
  showManual: boolean;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState): void => {
      this.show = state.show;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
