import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {Show} from 'solid-js';
import {tw} from '~/utilities';

export type HeaderProps = {
  class?: string;
  title?: string;
  children?: JSX.Element;
};

export const Header = (props: HeaderProps) => {
  const rootClasses = clsx(
    tw`mb-8 border-b-2 border-slate-950 py-8`,
    props.class
  );

  return (
    <header class={rootClasses}>
      <Show when={props.title}>
        <h1 class="sr-only">{props.title}</h1>
      </Show>
      <nav class="flex justify-between gap-4">{props.children}</nav>
    </header>
  );
};
