import React, { ChangeEvent } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from "@storybook/addon-actions";
import Input, {
    InputSizes,
    InputShapes,
    InputVariants
} from '.';

export default {
    title: 'Components / Input',
    parameters: {
        component: Input,
    },
};

export const inputsSizes = () => (
    <>
        <Input placeholder='small' size='small'></Input>
        <Input placeholder='medium' ></Input>
        <Input placeholder='large' size='large'></Input>
    </>
);

export const inputsShapes = () => (
    <>
        <Input placeholder='rectangle' ></Input>
        <Input placeholder='semiround' shape='semiround'></Input>
        <Input placeholder='round' shape='round'></Input>
    </>
);

export const inputVariants = () => (
    <>
        <Input placeholder='Primary' variant='primary'></Input>
        <Input placeholder='Success' variant='success'></Input>
        <Input placeholder='Info' variant='info'></Input>
        <Input placeholder='Warning' variant='warning'></Input>
        <Input placeholder='Danger' variant='danger'></Input>
    </>
);

export const fullWidthInput = () => (
    <>
        <Input placeholder='Primary' fullWidth variant='primary'></Input>
        <Input placeholder='Success' fullWidth variant='success'></Input>
        <Input placeholder='Info' fullWidth variant='info'></Input>
        <Input placeholder='Warning' fullWidth variant='warning'></Input>
        <Input placeholder='Danger' fullWidth variant='danger'></Input>
    </>
);

export const withState = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState();
    const handler = (event: ChangeEvent<any>) => setValue(event.target.value);

    return <>
        <Input placeholder='With State' value={value} onChange={handler}></Input>
        <br></br>
        {value}
    </>
};

export const knobs = () => (
    <Input
        placeholder={text('Text', 'Knobs are awesome!')}
        size={select('Size', InputSizes, InputSizes[0])}
        shape={select('Shape', InputShapes, InputShapes[0])}
        variant={select('variant', InputVariants, InputVariants[0])}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full Width', false)}
    >
    </Input>
);
knobs.story = {
    decorators: [withKnobs],
};
