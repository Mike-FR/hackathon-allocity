import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('offersPage <=> profilPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('offersPage <=> fidelitePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('homePage <=> fidelitePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('homePage <=> offersPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('homePage <=> registerPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
