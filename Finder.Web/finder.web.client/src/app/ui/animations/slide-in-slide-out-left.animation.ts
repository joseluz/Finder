import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
// Name pattern to animation files should match the following rule
// {{animation}}-[{{animationSequence}}-]{{anchor}}.animation.ts -> The part inside brackets is optional
// {{animation}}-{{anchor}} -> Must have at least these two

export const slideInSlideOutLeftAnimation: Array<AnimationTriggerMetadata> = [trigger('insertRemoveTrigger', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('750ms ease-in-out', style({transform: 'translateX(0)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)'}),
    animate('750ms ease-in-out', style({transform: 'translateX(-100%)'}))
  ])
])];
