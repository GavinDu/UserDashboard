import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }
  transform(url: any, args?: any): any {
    console.log(url);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
