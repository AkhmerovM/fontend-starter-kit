// @flow
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from 'modules/main/components/Grid';
import cn from 'classnames';
import { getUsers } from 'modules/main/actions';
import { Page } from 'modules/main/components/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './style.local.less';

export function MainContainer() {
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
