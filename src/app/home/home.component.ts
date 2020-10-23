import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {StorageService} from '../Servicios/storage.service'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUserSubscription: Subscription;
    constructor(
        private storage: StorageService
    ) {

    }

    ngOnInit() {

    }

    private loadAllUsers() {
    }
}