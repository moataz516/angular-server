import { Component } from '@angular/core';
import { AccountService } from '../AccountService';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [],
})
export class NewAccountComponent {
  constructor(
    private logService: LoggingService,
    private accountService: AccountService
  ) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }
}
