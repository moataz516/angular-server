import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ServerComponent {
  // serverStatus: string = 'offline';
  // constructor() {
  //   this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  // }
  // getColor() {
  //   return this.serverStatus === 'online' ? 'green' : 'red';
  // }
  ngOnInit(): void {
    this.onAddServer();
  }

  @Output() add = new EventEmitter<{ name: string; content: string }>();

  @Input('srvName') name = [];
  status: boolean = true;
  arr: any = [];
  changeStatus() {
    this.arr.push(this.arr.length + 1);
    this.status = !this.status;
  }

  onAddServer() {
    this.add.emit({ name: 'new ', content: 'new' });
  }
}
