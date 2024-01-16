import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  iconCache = new Map<string, string[]>();

  getIconFromCache(iconName: string) {
    return this.iconCache.get(iconName);
  }

  setCache(iconName: string, data: string[]) {
    this.iconCache.set(iconName, data);
  }
}
