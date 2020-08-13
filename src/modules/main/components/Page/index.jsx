import styles  from './style.local.less';
import React from 'react';

console.log(styles);

export function Page() {
    return <div className={styles.page}>Page</div>
}