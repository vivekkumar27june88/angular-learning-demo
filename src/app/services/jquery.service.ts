import { InjectionToken, Injectable } from '@angular/core';

export let JQ_TOKEN = new InjectionToken<Object>('jQuery');

@Injectable()
export class JqueryService {}
