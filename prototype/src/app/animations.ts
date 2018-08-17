import { trigger, state, transition, animate, style, stagger, keyframes, query } from '@angular/animations';

export class Animations {
    public static slideInOut = trigger('slideInOut', [
        state('true', style({ height: '0px', opacity: '0'})),
        state('false', style({ height: '*', opacity: '1'})),
        transition('1 => 0', animate('300ms ease-in')),
        transition('0 => 1', animate('300ms ease-out'))
    ]);
}