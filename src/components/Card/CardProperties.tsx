import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {tw} from '~/utilities';

export type CardPropertiesProps = {
  class?: string;
  children?: JSX.Element;
};

export const CardProperties = (props: CardPropertiesProps) => {
  const rootClasses = clsx(tw`grid gap-4`, props.class);

  return <dl class={rootClasses}>{props.children}</dl>;
};
