import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import Button, {
    ButtonSizes,
    ButtonShapes,
    ButtonAppereances,
    ButtonVariants
} from '.';

export default {
    title: 'Components / Button',
    parameters: {
        component: Button,
    },
};

export const buttonsSizes = () => (
    <>
        <Button size='small'>small</Button>
        <Button>medium</Button>
        <Button size='large'>large</Button>
    </>
);

export const buttonsShapes = () => (
    <>
        <Button>rectangle</Button>
        <Button shape='semiround'>semiround</Button>
        <Button shape='round'>round</Button>
    </>
);

export const buttonVariants = () => (
    <>
        <Button variant='primary'>Primary</Button>
        <Button variant='success'>Success</Button>
        <Button variant='info'>Info</Button>
        <Button variant='warning'>Warning</Button>
        <Button variant='danger'>Danger</Button>
    </>
);

export const outlineButtons = () => (
    <>
        <Button appereance='outline' variant='primary'>Primary</Button>
        <Button appereance='outline' variant='success'>Success</Button>
        <Button appereance='outline' variant='info'>Info</Button>
        <Button appereance='outline' variant='warning'>Warning</Button>
        <Button appereance='outline' variant='danger'>Danger</Button>
    </>
);

export const ghostButtons = () => (
    <>
        <Button appereance='ghost' variant='primary'>Primary</Button>
        <Button appereance='ghost' variant='success'>Success</Button>
        <Button appereance='ghost' variant='info'>Info</Button>
        <Button appereance='ghost' variant='warning'>Warning</Button>
        <Button appereance='ghost' variant='danger'>Danger</Button>
    </>
);

export const fullWidthButton = () => (
    <>
        <Button fullWidth variant='primary'>Primary</Button>
        <Button fullWidth variant='success'>Success</Button>
        <Button fullWidth variant='info'>Info</Button>
        <Button fullWidth variant='warning'>Warning</Button>
        <Button fullWidth variant='danger'>Danger</Button>
    </>
);

export const buttonsWithIcons = () => (
    <>
        <Button variant='primary'><span role="img" aria-label="Panda">😝</span></Button>
        <Button variant='info'><span role="img" aria-label="Panda">😨</span></Button>
        <Button variant='danger'><span role="img" aria-label="Panda">🐼</span></Button>
    </>
);

export const withState = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = React.useState(0);
    const handler = () => setCount(count + 1);

    return <Button onClick={handler}>Count: {count}</Button>
};

export const knobs = () => (
    <Button
        size={select('Size', ButtonSizes, ButtonSizes[0])}
        shape={select('Shape', ButtonShapes, ButtonShapes[0])}
        appereance={select('Appereance', ButtonAppereances, ButtonAppereances[0])}
        variant={select('variant', ButtonVariants, ButtonVariants[0])}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full Width', false)}
    >
        {text('Text', 'Knobs are awesome!')}
    </Button>
);
knobs.story = {
    decorators: [withKnobs],
};
