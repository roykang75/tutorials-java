import React, {Component} from 'react';
import styles from './StatusList.scss';
import classNames from 'classnames/bind';
import {Row} from "react-bootstrap";
import Status from "../Status";

const cx = classNames.bind(styles);

class StatusList extends Component {
    render() {
        const statusView = [];
        let dummyTest = {
            "numOfAllJobs": 1,
            "numOfGroups": 1,
            "numOfRunningJobs": 1
        };

        Object.keys(dummyTest).forEach((key) => {
            statusView.push(<Status key={key} statusKey={key}>{dummyTest[key]}</Status>)
        });

        return (
            <div className={cx('mt-3', 'mb-4')}>
                <div className={cx('h4', 'mb-3', 'text-gray-800')}>Job Status</div>
                <Row>
                    {statusView}
                </Row>
            </div>
        )
    }
}

export default StatusList;
