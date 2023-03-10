import { Component, Input } from '@angular/core';
import { AccountService } from '../AccountService';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService, LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  constructor(
    private accountService: AccountService,
    private loggingService: LoggingService
  ) {}
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
