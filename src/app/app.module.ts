import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SlideComponent } from './slide/slide.component';
import { BasicHigglightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './share/better-highlight.directive';
import { UnlessDirective } from './share/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountService } from './AccountService';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SlideComponent,
    BasicHigglightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggingService, AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {
  name = '';
}
