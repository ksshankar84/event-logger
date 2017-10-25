import {Component, Input} from '@angular/core'

@Component({
    selector: 'ind-item',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{indItem.category}}</h2>
            <div>Category: {{indItem.category}}</div>
            <div>Menu: {{indItem.menu}}</div>
            <div>
                <span>Date: {{indItem.date}}</span>
                <span>Time: {{indItem.time}}</span>
            </div>
        </div>
    `
})

export class IndItemComponent {
    @Input() indItem: any
}