import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {tw} from '~/utilities';

export type CardProps = {
  class?: string;
  children?: JSX.Element;
};

export const Card = (props: CardProps) => {
  const rootClasses = clsx(tw`[&:not(:last-child)]:*:mb-4`, props.class);

  return <article class={rootClasses}>{props.children}</article>;
};
