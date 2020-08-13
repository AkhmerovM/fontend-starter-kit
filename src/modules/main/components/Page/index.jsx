import styles  from './style.local.less';
import React from 'react';
import { ReactComponent as SmileIcon } from 'app/icons/smile.svg';
import nature from 'app/images/nature.jpg';

export function Page() {
    return <div className={styles.page}>
        <div className={styles.main}>Title page</div>
        <SmileIcon className={styles.icon} />
        <img src={nature} alt='nature' />
    </div>
}