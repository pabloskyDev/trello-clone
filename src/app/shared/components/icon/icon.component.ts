/* eslint-disable @typescript-eslint/no-explicit-any */
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Optional, ViewEncapsulation, inject } from '@angular/core';
import { IconService } from '@services/icon.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  private http = inject(HttpClient);
  private iconService = inject(IconService);

  @Input() name = '';
  @Input() customClass = '';

  private svgIcon!: SVGAElement;
  private class = '';

  constructor(
    private element: ElementRef<HTMLElement>,
    @Optional() @Inject(DOCUMENT) private document: any | unknown
  ) { }

  ngOnInit(): void {
    if (!this.name) throw new Error(`Icon ${this.name} not found`);
    this.class = this.customClass || 'w-4 h-4';
    console.log(this.class);
    const iconTrimName = `${this.name}_${this.class.replaceAll(' ', '')}`;
    const iconCache = this.iconService.getIconFromCache(iconTrimName);
    iconCache != undefined ? this.loadFromCache(iconCache) : this.getIconFromCache(this.name, iconTrimName);
  }

  private getIconFromCache(iconName: string, iconTrimName: string): void {
    this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' })
      .subscribe(data => {
        this.iconService.setCache(iconTrimName, [data, this.class]);
        this.loadSvgElement(data);
      })
  }

  private loadFromCache(iconCache: string[]) {
    this.customClass = iconCache[1];
    this.loadSvgElement(iconCache[0]);
  }

  private loadSvgElement(data: string) {
    const div = this.document.createElement('DIV');
    div.innerHTML = data;
    this.svgIcon = div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.element.nativeElement.appendChild(this.svgIcon);
    if (this.class) {
      this.element.nativeElement.querySelector('svg')?.classList.add(...this.class.split(' '));
    }
  }
}
