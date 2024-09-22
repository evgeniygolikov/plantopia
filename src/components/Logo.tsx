import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {Show} from 'solid-js';
import {tw} from '~/utilities';

export type LogoProps = {
  class?: string;
  href?: string;
  icon?: JSX.Element;
};

export const Logo = (props: LogoProps) => {
  const rootClasses = clsx(
    tw`flex items-center gap-1.5 text-lg font-bold text-slate-950 transition-colors focus:outline-none focus-visible:text-slate-600 focus-visible:outline-none`,
    props.class
  );

  return (
    <a
      class={rootClasses}
      href={props.href ?? '/'}
      aria-label="Go to home page"
    >
      <Show when={props.icon}>{props.icon}</Show>
      Plantopia
    </a>
  );
};
