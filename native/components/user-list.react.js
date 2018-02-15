// @flow

import type {
  StyleObj,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import type { AccountUserInfo } from 'lib/types/user-types';
import { accountUserInfoPropType } from 'lib/types/user-types';

import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ViewPropTypes, Text } from 'react-native';

import UserListUser from './user-list-user.react';

type Props = {
  userInfos: $ReadOnlyArray<AccountUserInfo>,
  onSelect: (userID: string) => void,
  itemStyle?: StyleObj,
  itemTextStyle?: StyleObj,
};
class UserList extends React.PureComponent<Props> {

  static propTypes = {
    userInfos: PropTypes.arrayOf(accountUserInfoPropType).isRequired,
    onSelect: PropTypes.func.isRequired,
    itemStyle: ViewPropTypes.style,
    itemTextStyle: Text.propTypes.style,
  };

  render() {
    return (
      <FlatList
        data={this.props.userInfos}
        renderItem={this.renderItem}
        keyExtractor={UserList.keyExtractor}
        getItemLayout={UserList.getItemLayout}
        keyboardShouldPersistTaps="handled"
        initialNumToRender={20}
      />
    );
  }

  static keyExtractor(userInfo: AccountUserInfo) {
    return userInfo.id;
  }

  renderItem = (row: { item: AccountUserInfo }) => {
    return (
      <UserListUser
        userInfo={row.item}
        onSelect={this.props.onSelect}
        style={this.props.itemStyle}
        textStyle={this.props.itemTextStyle}
      />
    );
  }

  static getItemLayout(data: ?$ReadOnlyArray<AccountUserInfo>, index: number) {
    return { length: 24, offset: 24 * index, index };
  }

}

export default UserList;
