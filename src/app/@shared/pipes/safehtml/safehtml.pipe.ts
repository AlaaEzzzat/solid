import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml',
})
/*
DomSanitizer helps preventing Cross Site Scripting Security bugs
(XSS) by sanitizing values to be safe to use in the different DOM contexts.
 */
export class SafehtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
