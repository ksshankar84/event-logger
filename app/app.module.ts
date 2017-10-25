import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {LoggerAppComponent} from './event-logger-app.component'
import {ItemsListComponent} from './item/items-list.component'
import {IndItemComponent} from './item/item.component'
import {NavBarComponent} from './nav/navbar.component'
import {ItemService} from './item/shared/item.service'
import {ToastrService} from './common/toastr.service'

@NgModule({
    imports: [BrowserModule],
    declarations: [LoggerAppComponent, ItemsListComponent, IndItemComponent, NavBarComponent],
    providers: [ItemService, ToastrService],
    bootstrap: [LoggerAppComponent]
})

export class AppModule {
 
}
