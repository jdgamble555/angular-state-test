import { Injectable, inject } from '@angular/core';
import { StateService } from './state.service';

@Injectable()
export abstract class DataService {
    abstract get(): string
}

@Injectable()
export class DataServiceServer extends DataService {
    state = inject(StateService);
    get(): string {        
        const test = 'server-data-performed-with-secret-tokens';
        this.state.saveState('test', test);
        return test;
    }
}

@Injectable()
export class DataServiceBrowser extends DataService {
    state = inject(StateService);
    get(): string {
        const test = this.state.getState<string>('test');
        console.log(test);
        return test;
    }
}