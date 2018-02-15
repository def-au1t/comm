// @flow

import type {
  StyleObj,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import type { AccountUserInfo } from 'lib/types/user-types';
import { accountUserInfoPropType } from 'lib/types/user-types';

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  ViewPropTypes,
} from 'react-native';

import Button from './button.react';

type Props = {
  userInfo: AccountUserInfo,
  onSelect: (userID: string) => void,
  style?: StyleObj,
  textStyle?: StyleObj,
};
class UserListUser extends React.PureComponent<Props> {

  static propTypes = {
    userInfo: accountUserInfoPropType.isRequired,
    onSelect: PropTypes.func.isRequired,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  };

  render() {
    return (
      <Button
        onPress={this.onSelect}
        iosFormat="highlight"
        iosActiveOpacity={0.85}
        style={this.props.style}
      >
        <Text style={[styles.text, this.props.textStyle]} numberOfLines={1}>
          {this.props.userInfo.username}
        </Text>
      </Button>
    );
  }

  onSelect = () => {
    this.props.onSelect(this.props.userInfo.id);
  }

}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
  },
});


export default UserListUser;
