import React from 'react';
import cn from 'classnames';
import styles from './style.local.less';

export function Grid() {
    return (
        <div className="grid">
            <div className="row with-wrap">
                <div className="col-sm-5 col-md-4"><div className={cn(styles.block1)}>some text</div></div>
                <div className="col-sm-5 col-md-6"><div className={cn(styles.block2)}>some text</div></div>
                <div className="col-sm-3 col-md-6"><div className={cn(styles.block3)}>some text</div></div>
            </div>
        </div>
    );
}
