import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
// Name pattern to animation files should match the following rule
// {{animation}}-[{{animationSequence}}-]{{anchor}}.animation.ts -> The part inside brackets is optional
// {{animation}}-{{anchor}} -> Must have at least these two

export const slideInRightAnimation: Array<AnimationTriggerMetadata> = [trigger('slideRight',
  [transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate('0.5s', style({transform: 'translateX(0%)'}))
  ])]
)];
