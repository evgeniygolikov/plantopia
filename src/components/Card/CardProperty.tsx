import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {Show} from 'solid-js';
import {tw} from '~/utilities';

export type CardPropertyProps = {
  class?: string;
  icon?: JSX.Element;
  key: JSX.Element;
  value: JSX.Element;
};

export const CardProperty = (props: CardPropertyProps) => {
  const rootClasses = clsx(
    tw`flex items-center gap-1.5 *:first:flex-shrink-0`,
    props.class
  );
  const contentClasses = clsx(tw`grid flex-grow gap-1`);
  const keyClasses = clsx(tw`font-sans text-xs uppercase`);
  const valueClasses = clsx(tw`text-2xl uppercase leading-none tracking-wide`);

  return (
    <div class={rootClasses}>
      <Show when={props.icon}>{props.icon}</Show>
      <div class={contentClasses}>
        <dt class={keyClasses}>{props.key}</dt>
        <dd class={valueClasses}>{props.value}</dd>
      </div>
    </div>
  );
};
