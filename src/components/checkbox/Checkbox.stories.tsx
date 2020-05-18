import React, { useState } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import Checkbox from '.';

export default {
    title: 'Components / Checkbox',
    parameters: {
        component: Checkbox,
    },
};

export const checkboxsStates = () => (
    <>
        <Checkbox disabled>Disabled</Checkbox>
        <Checkbox disabled checked>Disabled & Checked</Checkbox>
        <Checkbox>Enabled</Checkbox>
    </>
);

export const withState = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked(!checked);

    return <Checkbox checked={checked} onChange={toggle}>{checked.toString()}</Checkbox>
};

export const knobs = () => (
    <Checkbox
        disabled={boolean('Disabled', false)}
    >
        {text('Text', 'Knobs are awesome!')}
    </Checkbox>
);
knobs.story = {
    decorators: [withKnobs],
};
