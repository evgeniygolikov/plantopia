import clsx from 'clsx';
import type {JSX} from 'solid-js';
import {splitProps} from 'solid-js';
import {tw} from '~/utilities';

type NativeFormAction = string;

type NativeFormMethod = JSX.HTMLFormMethod;

type NativeFormEncType = JSX.HTMLFormEncType;

type NativeFormAttributes = JSX.HTMLAttributes<HTMLFormElement>;

export type FormProps<Action extends NativeFormAction> = {
  class?: string;
  action?: Action;
  method?: NativeFormMethod;
  enctype?: NativeFormEncType;
  children?: JSX.Element;
} & NativeFormAttributes;

export const Form = <Action extends NativeFormAction>(
  props: FormProps<Action>
) => {
  const [, nativeProps] = splitProps(props, ['class', 'children']);
  const rootClasses = clsx(tw``, props.class);

  return (
    <div class={rootClasses}>
      <form class="sr-only" {...nativeProps} />
      {props.children}
    </div>
  );
};
