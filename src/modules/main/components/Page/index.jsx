// @flow
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import cn from 'classnames';
import styles from './style.local.less';

export function Page() {
    const [name, setName] = useState('');
    const [isError, setIsError] = useState(false);
    const regexp = /^[1-6][0-9]$|^[1-9]$/;
    const handleChangeInput = (e) => {
        const text = e.currentTarget.value;
        if (!regexp.test(text)) {
            setIsError(true);
        } else {
            setIsError(false);
        }
        setName(text);
    };
    return (
        <div className={styles.page}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>name</Form.Label>
                    <Form.Control value={name} className={cn(styles.input, { [styles.error]: isError })} type="text" onChange={handleChangeInput} placeholder="Enter text" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
