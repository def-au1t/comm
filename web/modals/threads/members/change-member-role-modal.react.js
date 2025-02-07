// @flow

import invariant from 'invariant';
import * as React from 'react';

import {
  changeThreadMemberRoles,
  changeThreadMemberRolesActionTypes,
} from 'lib/actions/thread-actions.js';
import { useModalContext } from 'lib/components/modal-provider.react.js';
import SWMansionIcon from 'lib/components/SWMansionIcon.react.js';
import { otherUsersButNoOtherAdmins } from 'lib/selectors/thread-selectors.js';
import { roleIsAdminRole } from 'lib/shared/thread-utils.js';
import type { RelativeMemberInfo, ThreadInfo } from 'lib/types/thread-types';
import {
  useDispatchActionPromise,
  useServerCall,
} from 'lib/utils/action-utils.js';
import { values } from 'lib/utils/objects.js';

import css from './change-member-role-modal.css';
import UserAvatar from '../../../avatars/user-avatar.react.js';
import Button, { buttonThemes } from '../../../components/button.react.js';
import Dropdown from '../../../components/dropdown.react.js';
import { useSelector } from '../../../redux/redux-utils.js';
import Modal from '../../modal.react.js';
import UnsavedChangesModal from '../../unsaved-changes-modal.react.js';

type ChangeMemberRoleModalProps = {
  +memberInfo: RelativeMemberInfo,
  +threadInfo: ThreadInfo,
};

function ChangeMemberRoleModal(props: ChangeMemberRoleModalProps): React.Node {
  const { memberInfo, threadInfo } = props;
  const { pushModal, popModal } = useModalContext();
  const dispatchActionPromise = useDispatchActionPromise();
  const callChangeThreadMemberRoles = useServerCall(changeThreadMemberRoles);
  const otherUsersButNoOtherAdminsValue = useSelector(
    otherUsersButNoOtherAdmins(threadInfo.id),
  );

  const roleOptions = React.useMemo(
    () =>
      values(threadInfo.roles).map(role => ({
        id: role.id,
        name: role.name,
      })),
    [threadInfo.roles],
  );

  const initialSelectedRole = memberInfo.role;
  invariant(initialSelectedRole, "Member's role must be defined");

  const [selectedRole, setSelectedRole] = React.useState(initialSelectedRole);

  const onCloseModal = React.useCallback(() => {
    if (selectedRole === initialSelectedRole) {
      popModal();
      return;
    }

    pushModal(<UnsavedChangesModal />);
  }, [initialSelectedRole, popModal, pushModal, selectedRole]);

  const disabledRoleChangeMessage = React.useMemo(() => {
    const memberIsAdmin = roleIsAdminRole(
      threadInfo.roles[initialSelectedRole],
    );

    if (!otherUsersButNoOtherAdminsValue || !memberIsAdmin) {
      return null;
    }

    return (
      <div className={css.roleModalDisabled}>
        <SWMansionIcon icon="info-circle" size={36} className={css.infoIcon} />
        <div className={css.infoText}>
          There must be at least one admin at any given time in a community.
        </div>
      </div>
    );
  }, [initialSelectedRole, otherUsersButNoOtherAdminsValue, threadInfo.roles]);

  const onSave = React.useCallback(() => {
    if (selectedRole === initialSelectedRole) {
      popModal();
      return;
    }

    const createChangeThreadMemberRolesPromise = () =>
      callChangeThreadMemberRoles(threadInfo.id, [memberInfo.id], selectedRole);

    dispatchActionPromise(
      changeThreadMemberRolesActionTypes,
      createChangeThreadMemberRolesPromise(),
    );
    popModal();
  }, [
    callChangeThreadMemberRoles,
    dispatchActionPromise,
    initialSelectedRole,
    memberInfo.id,
    popModal,
    selectedRole,
    threadInfo.id,
  ]);

  return (
    <Modal name="Change Role" onClose={onCloseModal} size="large">
      <div className={css.roleModalDescription}>
        Members can only be assigned to one role at a time. Changing a
        member&rsquo;s role will replace their previously assigned role.
      </div>
      <div className={css.roleModalMember}>
        <div className={css.roleModalMemberAvatar}>
          <UserAvatar userID={memberInfo.id} size="large" />
        </div>
        <div className={css.roleModalMemberName}>{memberInfo.username}</div>
      </div>
      <div className={css.roleModalRoleSelector}>
        <Dropdown
          options={roleOptions}
          activeSelection={selectedRole}
          setActiveSelection={setSelectedRole}
          disabled={!!disabledRoleChangeMessage}
        />
      </div>
      {disabledRoleChangeMessage}
      <div className={css.roleModalActionButtons}>
        <Button
          variant="outline"
          className={css.roleModalBackButton}
          onClick={onCloseModal}
        >
          Back
        </Button>
        <Button
          variant="filled"
          className={css.roleModalSaveButton}
          buttonColor={buttonThemes.primary}
          onClick={onSave}
          disabled={!!disabledRoleChangeMessage}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
}

export default ChangeMemberRoleModal;
