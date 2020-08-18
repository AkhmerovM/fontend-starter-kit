import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './style.local.less';

export function Grid() {
    return (
        <div className={styles.grid}>
            <Link to="/main/edit">LINK</Link>
            <div className={cn(styles.block1, styles.block)}>some text</div>
            <div className={cn(styles.block2, styles.block)}>some text</div>
            <div className={cn(styles.block3, styles.block)}>some text</div>
            <div className={cn(styles.block4, styles.block)}>some text</div>
            <div className={cn(styles.block5, styles.block)}>some text</div>
        </div>
    );
}
