import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {splitProps} from 'solid-js';
import {tw} from '~/utilities';

type NativeButtonAttributes = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  class?: string;
  children?: JSX.Element;
} & NativeButtonAttributes;

export const Button = (props: ButtonProps) => {
  const [, nativeProps] = splitProps(props, ['class', 'children']);
  const rootClasses = clsx(
    tw`inline-flex items-center gap-1.5 bg-slate-950 px-8 py-2 text-lg font-bold uppercase tracking-widest text-slate-50 ring-slate-950 ring-offset-2 ring-offset-slate-50 transition-all hover:bg-slate-800 focus:outline-none focus-visible:ring-4`,
    props.class
  );

  return (
    <button class={rootClasses} {...nativeProps}>
      {props.children}
    </button>
  );
};
