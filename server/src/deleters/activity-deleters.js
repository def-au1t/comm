// @flow

import type { Viewer } from '../session/viewer';

import { dbQuery, SQL } from '../database';
import { earliestFocusedTimeConsideredExpired } from '../shared/focused-times';

async function deleteForViewerSession(
  viewer: Viewer,
  beforeTime?: number,
): Promise<void> {
  const query = SQL`
    DELETE FROM focused
    WHERE user = ${viewer.userID} AND session = ${viewer.session}
  `;
  if (beforeTime !== undefined) {
    query.append(SQL`AND time < ${beforeTime}`);
  }
  await dbQuery(query);
}

async function deleteOrphanedFocused(): Promise<void> {
  const time = earliestFocusedTimeConsideredExpired();
  await dbQuery(SQL`
    DELETE f
    FROM focused f
    LEFT JOIN threads t ON t.id = f.thread
    LEFT JOIN users u ON u.id = f.user
    LEFT JOIN sessions s ON s.id = f.session
    WHERE t.id IS NULL OR u.id IS NULL OR s.id IS NULL OR f.time <= ${time}
  `);
}

export {
  deleteForViewerSession,
  deleteOrphanedFocused,
};
