import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {splitProps} from 'solid-js';
import {tw} from '~/utilities';

type NativeSVGAttributes = JSX.UseSVGAttributes<SVGSVGElement> &
  JSX.FitToViewBoxSVGAttributes;

export type IconProps = {
  class?: string;
  children?: JSX.Element;
} & NativeSVGAttributes;

const SVG = (props: IconProps) => {
  const [, nativeProps] = splitProps(props, ['class', 'role', 'children']);
  const rootClasses = clsx(tw`fill-current`, props.class);

  return (
    <svg
      class={rootClasses}
      role={props.role ?? 'presentation'}
      {...nativeProps}
    >
      {props.children}
    </svg>
  );
};

export const PlantMediumIcon = (props: IconProps) => {
  return (
    <SVG {...props} width="24" height="24" viewBox="0 0 24 24">
      <path d="M5.998 2a6.999 6.999 0 0 1 6.197 3.741A6.491 6.491 0 0 1 17.498 3h3.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-1.5v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-2h-2a7 7 0 0 1-7-7V2zm10 13h-8v5h8zm3-10h-1.5a4.5 4.5 0 0 0-4.5 4.5v.5h1.5a4.5 4.5 0 0 0 4.5-4.5zm-13-1h-2a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5" />
    </SVG>
  );
};
