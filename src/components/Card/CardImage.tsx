import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {tw} from '~/utilities';

export type CardImageProps = {
  class?: string;
  children?: JSX.Element;
};

export const CardImage = (props: CardImageProps) => {
  const rootClasses = clsx(
    tw`flex aspect-video items-center justify-center overflow-hidden *:object-cover`,
    props.class
  );

  return <div class={rootClasses}>{props.children}</div>;
};
