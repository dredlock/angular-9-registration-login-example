import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key == 'F10') {
            event.preventDefault();
            this.accountService.logout();
        }
    }

    logout() {
        this.accountService.logout();
    }
}