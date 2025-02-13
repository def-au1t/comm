// @flow

import * as React from 'react';

import { BaseEditUserAvatarProvider } from 'lib/components/base-edit-user-avatar-provider.react.js';

// TODO: Implement `useUploadSelectedMedia(...)` for `web`.
const useUploadSelectedMedia = () => async () => null;

type Props = {
  +children: React.Node,
};
function WebEditUserAvatarProvider(props: Props): React.Node {
  const { children } = props;
  return (
    <BaseEditUserAvatarProvider useUploadSelectedMedia={useUploadSelectedMedia}>
      {children}
    </BaseEditUserAvatarProvider>
  );
}

export default WebEditUserAvatarProvider;
