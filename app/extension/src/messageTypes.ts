/**
 * Message type constants for Chrome extension messaging
 * Using constants instead of hardcoded strings prevents typos and enables IDE autocomplete
 */
export const MessageTypes = {
  // Clipper operations
  AUTO_SAVE_CLIPPER: 'auto_save_clipper',
  SAVE_CLIPPER: 'save_clipper',
  SAVE_CLIPPER_SUCCESS: 'save_clipper_success',

  // Tab operations
  TAB_COMPLETE: 'tab_complete',
  OPEN_TAB: 'open_tab',

  // Tweet operations
  AUTO_SAVE_TWEETS: 'auto_save_tweets',
  READ_TWEET: 'read_tweet',

  // Document parsing
  PARSE_DOC: 'parse_doc',

  // Shortcuts/AI processing
  SHORTCUTS_PREVIEW: 'shortcuts_preview',
  SHORTCUTS_EXECUTE: 'shortcuts_execute',
  SHORTCUTS_PROCESS: 'shortcuts_process',
  SHORTCUTS_CANCEL: 'shortcuts_cancel',
  SHORTCUTS_PROCESSING_START: 'shortcuts_processing_start',
  SHORTCUTS_PROCESS_RESULT: 'shortcuts_process_result',
  SHORTCUTS_PROCESS_DATA: 'shortcuts_process_data',
  SHORTCUTS_PROCESS_ERROR: 'shortcuts_process_error',

  // Data retrieval
  GET_SELECTION: 'get_selection',
  GET_HUNTLY_SHORTCUTS: 'get_huntly_shortcuts',
  GET_AI_TOOLBAR_DATA: 'get_ai_toolbar_data',

  // Save operations
  SAVE_DETAIL_INIT: 'save_detail_init',

  // Network
  HTTP_PROXY: 'http_proxy',

  // RSS
  DETECT_RSS_FEED: 'detect_rss_feed',

  // Badge
  BADGE_REFRESH: 'badge_refresh',
} as const;

export type MessageType = typeof MessageTypes[keyof typeof MessageTypes];
