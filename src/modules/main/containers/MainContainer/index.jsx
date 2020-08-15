// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainUsers } from 'modules/main/selectors';
import { Grid } from 'modules/main/components/Grid';
import { Button } from 'react-bootstrap';
import cn from 'classnames';
import { getUsers } from 'modules/main/actions';
import styles from './style.local.less';

export function MainContainer() {
    const users = useSelector(selectMainUsers);
    console.log(users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div className={cn(styles.mainContainer, 'h_full')}>
            <Grid />
            <div>
                <Button variant="primary">Primary</Button>
            </div>
        </div>
    );
}
