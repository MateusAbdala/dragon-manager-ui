import React, { useState } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import Toggle from '.';

export default {
    title: 'Components / Toggle',
    parameters: {
        component: Toggle,
    },
};

export const TogglesStates = () => (
    <>
        <Toggle disabled>Disabled</Toggle>
        <Toggle disabled checked>Disabled & Checked</Toggle>
        <Toggle>Enabled</Toggle>
    </>
);

export const withState = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked(!checked);

    return <Toggle checked={checked} onChange={toggle}>{checked.toString()}</Toggle>
};

export const knobs = () => (
    <Toggle
        disabled={boolean('Disabled', false)}
        checked={boolean('Checked', false)}
    >
        {text('Text', 'Knobs are awesome!')}
    </Toggle>
);
knobs.story = {
    decorators: [withKnobs],
};
