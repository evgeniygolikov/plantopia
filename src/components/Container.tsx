import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {tw} from '~/utilities';

export type ContainerProps = {
  class?: string;
  children?: JSX.Element;
};

export const Container = (props: ContainerProps) => {
  const rootClasses = clsx(tw`mx-auto max-w-[80rem] px-4`, props.class);

  return <div class={rootClasses}>{props.children}</div>;
};
