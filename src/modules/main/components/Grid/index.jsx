import React from 'react';
import cn from 'classnames';
import styles from './style.local.less';

export function Grid() {
    return (
        <div className={styles.grid}>
            <div className={cn(styles.block1, styles.block)}>some text</div>
            <div className={cn(styles.block2, styles.block)}>some text</div>
            <div className={cn(styles.block3, styles.block)}>some text</div>
            <div className={cn(styles.block4, styles.block)}>some text</div>
            <div className={cn(styles.block5, styles.block)}>some text</div>
        </div>
    );
}
