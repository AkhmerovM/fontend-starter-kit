// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainUsers } from 'modules/main/selectors';
import { Grid } from 'modules/main/components/Grid';
import cn from 'classnames';
import { getUsers } from 'modules/main/actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Page } from 'modules/main/components/Page';
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
            <Router>
                <Switch>
                    <Route path="/" exact component={Grid} />
                    <Route path="/main/edit" exact component={Page} />
                </Switch>
            </Router>
        </div>
    );
}
