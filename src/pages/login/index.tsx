import { Redirect } from '@reach/router';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Button from '../../components/button';
import Card, { CardBody, CardFooter, CardHeader } from '../../components/card';
import Checkbox from '../../components/checkbox';
import Input from '../../components/input';
import { IRootStore, rootStore } from '../../stores';
import { Styled } from './Login.styles';

export interface Props extends IRootStore {
    theme?: any,
}

@inject('rootStore')
@observer
export default class Login extends Component<Props> {

    @observable public user: any;
    @observable public password: any;
    @observable public invalidForm = false;

    onSubmit = () => {
        const { rootStore } = this.props;
        this.invalidForm = (!rootStore!.authStore.login());
    }

    onChangeUser = (event: any) => {
        const { rootStore } = this.props;
        rootStore!.authStore.setUser(event.target.value);
        this.invalidForm = false;
    };

    onChangePassword = (event: any) => {
        const { rootStore } = this.props;
        rootStore!.authStore.setPassword(event.target.value);
        this.invalidForm = false;
    };

    render() {
        return rootStore.authStore.isLogged ? (
            <Redirect to='/' noThrow />
        ) : (
                <Styled.Login {...this.props}>
                    {/* Background elements */}
                    <Styled.SquaresWrapper>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                        <Styled.Square></Styled.Square>
                    </Styled.SquaresWrapper>

                    {/* Actual content */}
                    <Card accent='primary'>
                        <CardHeader>Login with your account</CardHeader>
                        <CardBody>
                            <Input onChange={this.onChangeUser} variant={this.invalidForm ? 'danger' : 'primary'} fullWidth placeholder='Username'></Input>
                            <Input onChange={this.onChangePassword} variant={this.invalidForm ? 'danger' : 'primary'} fullWidth placeholder='Password' type='password'></Input>

                            <Checkbox>Remember Me</Checkbox>

                            <Button fullWidth onClick={this.onSubmit}>Login</Button>
                        </CardBody>
                        <CardFooter>
                            <Button appereance='ghost' size='small'>Forgot my password</Button>
                        </CardFooter>
                    </Card>
                </Styled.Login>
            );
    }
}
