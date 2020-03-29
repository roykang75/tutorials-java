import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import JobList from "../../components/schedule/JobList";
import JobAlert from "../../components/notification/JobAlert";

class JobListContainer extends Component {
    handleModal = (jobName, groupName) => {
        const {BaseActions} = this.props;
        BaseActions.showModal('deleteJob');
        BaseActions.updateDeleteJobModal({
            jobName: jobName,
            groupName: groupName
        });
    };

    handleNotification = () => {
        const {BaseActions} = this.props;
        BaseActions.hideNotification();
    };

    render() {
        const {data, visibleNotification, message, handleNotification} = this.props;
        const {handleModal} = this;

        return (
            <div>
                <JobAlert
                    visibleNotification={visibleNotification}
                    message={message}
                    handleNotification={handleNotification}
                />
                <JobList
                    jobs={data.jobs}
                    onDeleteModal={handleModal}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        data: state.list.get('data'),
        visibleNotification: state.base.getIn(['notification', 'enable']),
        message: state.base.getIn(['notification', 'message'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
    })
)(JobListContainer);
