import {Component, OnInit} from '@angular/core'
import {ItemService} from './shared/item.service'
import {ToastrService} from '.././common/toastr.service'

@Component ({
    selector: 'item-list',
    template: `
    <div>
        <h1>Your Items</h1>
        <hr>
        <div *ngFor = "let item of items" class="col-md-5">
            <ind-item [indItem]="item" (click)="handleClickItem(item.category)"></ind-item>
        </div>
    </div>
    `
})

export class ItemsListComponent implements OnInit {
    items: any[]
    constructor(private itemService: ItemService, private toastr: ToastrService){}

    ngOnInit() {
        this.items = this.itemService.getItems()
    }

    handleClickItem(itemCategory) {
        this.toastr.success(itemCategory);
    }
}