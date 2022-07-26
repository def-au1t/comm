// @flow

import invariant from 'invariant';
import * as React from 'react';

import { emptyItemText } from 'lib/shared/thread-utils';

import { assetCacheURLPrefix, backgroundIllustrationAsset } from '../assets';
import Button from '../components/button.react';
import Search from '../components/search.react';
import { useSelector } from '../redux/redux-utils';
import { useOnClickNewThread } from '../selectors/nav-selectors';
import ChatThreadListItem from './chat-thread-list-item.react';
import css from './chat-thread-list.css';
import { ThreadListContext } from './thread-list-provider';

function ChatThreadList(): React.Node {
  const threadListContext = React.useContext(ThreadListContext);
  invariant(
    threadListContext,
    'threadListContext should be set in ChatThreadList',
  );
  const {
    activeTab,
    threadList,
    setSearchText,
    searchText,
  } = threadListContext;

  const onClickNewThread = useOnClickNewThread();

  const isThreadCreation = useSelector(
    state => state.navInfo.chatMode === 'create',
  );

  const isBackground = activeTab === 'Background';

  const threadComponents: React.Node[] = React.useMemo(() => {
    const threads = threadList.map(item => (
      <ChatThreadListItem item={item} key={item.threadInfo.id} />
    ));
    if (threads.length === 0 && isBackground) {
      threads.push(<EmptyItem key="emptyItem" />);
    }
    return threads;
  }, [threadList, isBackground]);

  return (
    <>
      <div className={css.threadListContainer}>
        <Search
          onChangeText={setSearchText}
          searchText={searchText}
          placeholder="Search chats"
        />
        <div>{threadComponents}</div>
      </div>
      <div className={css.createNewThread}>
        <Button disabled={isThreadCreation} onClick={onClickNewThread}>
          Create new chat
        </Button>
      </div>
    </>
  );
}

function EmptyItem() {
  return (
    <div className={css.emptyItemContainer}>
      <img
        src={`${assetCacheURLPrefix}/${backgroundIllustrationAsset.fileName}`}
        height={backgroundIllustrationAsset.height}
        width={backgroundIllustrationAsset.width}
      />
      <div className={css.emptyItemText}>{emptyItemText}</div>
    </div>
  );
}

export default ChatThreadList;
