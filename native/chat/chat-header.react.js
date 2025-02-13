// @flow

import type { StackHeaderProps } from '@react-navigation/stack';
import * as React from 'react';

import Header from '../navigation/header.react.js';
import { createActiveTabSelector } from '../navigation/nav-selectors.js';
import { NavContext } from '../navigation/navigation-context.js';
import { ChatRouteName } from '../navigation/route-names.js';

const activeTabSelector = createActiveTabSelector(ChatRouteName);

const ChatHeader: React.ComponentType<StackHeaderProps> =
  React.memo<StackHeaderProps>(function ChatHeader(props: StackHeaderProps) {
    const navContext = React.useContext(NavContext);
    const activeTab = activeTabSelector(navContext);
    return <Header {...props} activeTab={activeTab} />;
  });

export default ChatHeader;
