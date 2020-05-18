import React from 'react';
import { Router, RouteComponentProps } from "@reach/router"
import Login from './login';
import Dragons from './dragons';

let DragonsRoute = (props: RouteComponentProps) => <Dragons />
let LoginRoute = (props: RouteComponentProps) => <Login />

const Pages: React.FC = () => (
    <Router>
        <DragonsRoute path="/" />
        <LoginRoute path="login" />
    </Router>
);

export default Pages;
