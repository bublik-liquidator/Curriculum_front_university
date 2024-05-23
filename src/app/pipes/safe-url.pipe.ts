import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitiser: DomSanitizer) {}

  transform(url: string): SafeUrl {
    return this.sanitiser.bypassSecurityTrustUrl(url);
  }
}
