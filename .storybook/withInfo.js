import { withInfo } from '@storybook/addon-info';
import { Fragment } from "react";

export const withInfoConfig = withInfo({
    styles: {
        header: {
            h1: {
                color: '#093C2F',
                marginRight: '20px',
                fontSize: '25px',
                fontWeight: 'bold',
                display: 'inline',
            },
            body: {
                paddingTop: 0,
                paddingBottom: 0,
            },
            h2: {
                display: 'inline',
                color: '#B9A557',
            },
        },
        infoBody: {
            backgroundColor: '#f8f8f8',
            padding: '0px 5px',
            lineHeight: '2',
        },
    },
    inline: true,
    source: false,
    excludedPropTypes: ['theme'],
    propTablesExclude: [Fragment]// GlobalStyle
})