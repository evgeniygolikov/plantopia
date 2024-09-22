import {type JSX} from 'solid-js';
import {createUniqueId} from 'solid-js';
import {Button, Form} from '~/components';
import type {Plant} from '~/types';

export type PlantCardFormProps = {
  class?: string;
  plant?: Plant;
  isToday?: boolean;
  children?: JSX.Element;
};

export const PlantCardForm = (props: PlantCardFormProps) => {
  const formId = createUniqueId();
  const label = props.isToday ? 'Mark watered' : 'Move to today';

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (
    event
  ) => {
    event.preventDefault();
    console.log(props.plant);
  };

  return (
    <Form id={formId} method="post" onSubmit={handleSubmit}>
      <Button form={formId}>{label}</Button>
    </Form>
  );
};
