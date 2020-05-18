import { Redirect } from '@reach/router';
import { inject, observer, useObserver } from 'mobx-react';
import React, { Component } from 'react';
import Button from '../../components/button';
import Card, { CardBody, CardFooter, CardHeader } from '../../components/card';
import { Styled } from './Dragons.styles';
import { IRootStore, rootStore } from '../../stores';
import { observable } from 'mobx';
import { IDragon } from '../../services/DragonService';
import Loading from '../../components/loading';

export interface Props extends IRootStore {
    theme?: any,
}

@inject('rootStore')
@observer
export default class Login extends Component<Props> {
    @observable
    public loading: boolean = false;

    @observable
    public dragons: IDragon[] | undefined;

    componentDidMount = () => {
        this.getDragons();
    }

    getDragons = () => {
        const { rootStore } = this.props;

        this.loading = true;

        rootStore!.dragonsStore.getDragons()
            .then((data) => this.dragons = data)
            .catch((err) => console.error(err))
            // .finally(() => this.loading = false);
    }

    getDragon = (id: string) => {
        const { rootStore } = this.props;

        this.loading = true;

        rootStore!.dragonsStore.getDragon(id)
            .then((data) => this.dragons = data)
            .catch((err) => console.error(err))
            .finally(() => this.loading = false);
    }

    createDragon = (dragon: IDragon) => {
        const { rootStore } = this.props;

        this.loading = true;

        rootStore!.dragonsStore.createDragon(dragon)
            .then((data) => this.dragons = data)
            .catch((err) => console.error(err))
            .finally(() => this.loading = false);
    }

    mutateDragon = (dragon: IDragon) => {
        const { rootStore } = this.props;

        this.loading = true;

        rootStore!.dragonsStore.mutateDragon(dragon)
            .then((data) => this.dragons = data)
            .catch((err) => console.error(err))
            .finally(() => this.loading = false);
    }

    killDragon = (id: any) => {
        const { rootStore } = this.props;

        this.loading = true;

        rootStore!.dragonsStore.killDragon(id)
            .then(() => this.getDragons())
            .catch((err) => console.error(err))
            .finally(() => this.loading = false);
    }



    dragonList = () => {
        return useObserver(() => (
            <>
                {this.dragons?.map(dragon =>
                    <Card accent='primary' key={dragon.id}>
                        <CardHeader>{dragon.name}</CardHeader>
                        <CardBody>
                            {/* Time is running, sorry boys... */}
                            {this.loading && <Loading />}
                            <img src={dragon.imageUrl} alt={dragon.name} width='100%' />
                            <b>Type: </b>{dragon.type}<br />
                            <b>History: </b>{dragon.history}
                        </CardBody>
                        <CardFooter>
                            <Button appereance='ghost' size='small' variant='danger' onClick={() => this.killDragon(dragon.id)}>kill</Button>
                            <Button appereance='ghost' size='small' variant='warning' >mutate</Button>
                        </CardFooter>
                    </Card>
                )}
            </>
        ))
    }

    render() {
        return !rootStore.authStore.isLogged ? (
            <Redirect to='/login' noThrow />
        ) : (
                <Styled.Dragons {...this.props}>
                    <Styled.DragonsHeader>
                    </Styled.DragonsHeader>

                    <Styled.DragonsWrapper>
                        <this.dragonList />
                    </Styled.DragonsWrapper>
                </Styled.Dragons>
            );
    }
}
