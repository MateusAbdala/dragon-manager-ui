import React, { useState } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import Radio from '.';

export default {
    title: 'Components / Radio',
    parameters: {
        component: Radio,
    },
};

export const radioStates = () => (
    <>
        <Radio disabled>Disabled</Radio>
        <Radio disabled checked>Disabled & Checked</Radio>
        <Radio>Enabled</Radio>
    </>
);

export const radioStateless = () => (
    <>
        <Radio name='radio' value='1'>Option 1</Radio>
        <Radio name='radio' value='2'>Option 2</Radio>
        <Radio name='radio' value='3'>Option 3</Radio>
        <Radio name='radio' value='4'>Option 4</Radio>
        <Radio name='radio' value='5'>Option 5</Radio>
    </>
);

export const withState = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [gender, setGender] = React.useState('male');
    const handler = (event: React.ChangeEvent<HTMLInputElement>) => setGender(event.target.value);

    return <>
        <Radio name='gender' checked={gender === 'male'} value='male' onChange={handler}>Male</Radio>
        <Radio name='gender' checked={gender === 'female'} value='female' onChange={handler}>Female</Radio>
        <br></br>
        {gender.toString()}
    </>
};

export const knobs = () => (
    <Radio
        disabled={boolean('Disabled', false)}
        checked={boolean('Checked', false)}
    >
        {text('Text', 'Knobs are awesome!')}
    </Radio>
);
knobs.story = {
    decorators: [withKnobs],
};
