import {
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AccountService } from './AccountService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  @ViewChild('name') name;
  title = 'my-first-app';
  // @Input() elements: { name: string; content: string } = {
  //   name: '',
  //   content: 'aaaassss',
  // };

  // onEmitAdd(addServer: { name: string; content: string }) {
  //   this.elements.name = addServer.name;
  // }

  // addName(a: string) {
  //   console.log(this.name.nativeElement.value);
  // }

  // constructor() {
  //   console.log('constractor');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngonchanges');
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  // ngDoCheck(): void {
  //   console.log('docheck');
  // }
  // oddInterval: number[] = [];
  // evenInterval: number[] = [];
  // onInterval(num: number) {
  //   if (num % 2 === 0) {
  //     this.evenInterval.push(num);
  //   } else {
  //     this.oddInterval.push(num);
  //   }
  //}

  // numbers = [1, 2, 3, 4, 5];
  // onlyOddNum = [1, 3, 5];
  // onlyEvenNum = [2, 4];
  // onlyOdd = false;
  // showStatus = true;
  // value = 100;

  accounts: { name: string; status: string }[] = [];
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
