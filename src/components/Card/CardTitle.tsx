import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {tw} from '~/utilities';

export type CardTitleProps = {
  class?: string;
  children?: JSX.Element;
};

export const CardTitle = (props: CardTitleProps) => {
  const rootClasses = clsx(tw`text-2xl font-bold tracking-wide`, props.class);

  return <h3 class={rootClasses}>{props.children}</h3>;
};
