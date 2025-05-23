import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: false,
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss'
})
export class ViewchildComponent implements AfterViewInit, OnDestroy{
  @ViewChild('autoButton') buttonRef!: ElementRef<HTMLButtonElement>;
  clickCount = 0;
  private intervalId: any;

  ngAfterViewInit(): void {
    // Ogni 5 secondi, fai click programmatico
    this.intervalId = setInterval(() => {
      this.buttonRef.nativeElement.click();
    }, 5000);
  }

  onAutoClick(): void {
    this.clickCount++;
    console.log('Button clicked!', this.clickCount);
  }

  ngOnDestroy(): void {
    // Pulizia importante
    clearInterval(this.intervalId);
  }

}
