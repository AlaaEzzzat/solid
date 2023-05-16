import { Component, Input } from '@angular/core';
import { DisplayService } from '@cic-garage/cic-core-library';
import { CodeTab } from 'src/app/features/s/data';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent {
  //#region Declerations
  @Input() data!: Array<CodeTab>;
  @Input() htmlText!: string;
  @Input() tsText!: string;
  @Input() otherText!: string;
  _activeText: number = 0;
  //#endregion Declerations

  constructor(private __toast: DisplayService) {}

  //#region Methods
  copyToClipBoard(): void {
    const newElement = document.createElement('div');
    const text = this.getActiveText();
    newElement.innerHTML = text.type === 'html' ? '' : text.text;

    navigator.clipboard.writeText(
      text.type === 'html' ? text.text : newElement.textContent!
    );
    this.__toast.displayToast('info', 'Copied to clipboard');
  }

  getActiveText(): { text: string; type: string } {
    if (this.otherText) {
      return { text: this.otherText, type: 'other' };
    } else if (this.htmlText && this.tsText) {
      return this._activeText === 0
        ? { type: 'html', text: this.htmlText }
        : { type: 'ts', text: this.tsText };
    } else {
      return this.htmlText
        ? { type: 'html', text: this.htmlText }
        : {
            type: 'ts',
            text: this.tsText,
          };
    }
  }
  //#endregion Methods
}
