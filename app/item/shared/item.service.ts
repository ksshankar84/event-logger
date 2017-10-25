import {Injectable} from '@angular/core'

@Injectable()
export class ItemService {
    getItems() {
        return ITEMS
    }
}

const ITEMS = [
    {
        id: 1,
        name: 'Food Intake',
        category: 'Breakfast',
        menu: 'Peanut Butter & Jam',
        time: '09:45 AM',
        date: '10/19/2017'
    }, {
        id: 2,
        name: 'Food Intake',
        category: 'Lunch',
        menu: 'Coconut Rice and Egg',
        time: '01:10 PM',
        date: '10/20/2017'
    }, {
        id: 3,
        name: 'Food Intake',
        category: 'Dinner',
        menu: 'Thai Food take out',
        time: '09:00 PM',
        date: '10/20/2017'
    }
]