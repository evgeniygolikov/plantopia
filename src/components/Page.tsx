import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {tw} from '~/utilities';

export type PageProps = {
  class?: string;
  children?: JSX.Element;
};

export const Page = (props: PageProps) => {
  const rootClasses = clsx(tw`w-full`, props.class);

  return <div class={rootClasses}>{props.children}</div>;
};
