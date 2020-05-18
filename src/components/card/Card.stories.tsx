import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Card, {
    CardHeader, CardBody, CardFooter, CardAccents,
} from '.';

export default {
    title: 'Components /  Card',
    parameters: {
        component: Card,
    },
};

export const standard = () => (
    <Card>
        <CardBody>Body content....</CardBody>
    </Card>
);

export const withHeader = () => (
    <Card>
        <CardHeader>Header text</CardHeader>
        <CardBody>Body content....</CardBody>
    </Card>
);

export const withFooter = () => (
    <Card>
        <CardBody>Body content....</CardBody>
        <CardFooter>Footer Text</CardFooter>
    </Card>
);


export const knobs = () => (
    <Card accent={select('accent', CardAccents, CardAccents[0])}>
        <CardHeader>{text('Header', 'Header text')}</CardHeader>
        <CardBody>{text('Body', 'Body content....')}</CardBody>
        <CardFooter>{text('Footer', 'Footer text')}</CardFooter>
    </Card>
);
knobs.story = {
    decorators: [withKnobs],
};
