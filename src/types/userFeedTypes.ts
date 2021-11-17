type AuthorStats = {
  followingCount: number;
  followerCount: number;
  heartCount: number;
  videoCount: number;
  diggCount: number;
  heart: number;
};

type EffectSticker = {
  name: string;
  ID: string;
};

type TextExtra = {
  awemeId: string;
  start: number;
  end: number;
  hashtagName: string;
  hashtagId: string;
  type: number;
  userId: string;
  isCommerce: boolean;
  userUniqueId: string;
  secUid: string;
  subType: number;
};

type DuetInfo = { duetFromId: string };

export type Stats = {
  diggCount: number;
  shareCount: number;
  commentCount: number;
  playCount: number;
};

type Challenge = {
  id: string;
  title: string;
  desc: string;
  profileThumb: string;
  profileMedium: string;
  profileLarger: string;
  coverThumb: string;
  coverMedium: string;
  coverLarger: string;
  isCommerce: boolean;
};

type Music = {
  id: string;
  title: string;
  playUrl: string;
  coverThumb: string;
  coverMedium: string;
  coverLarge: string;
  authorName: string;
  original: boolean;
  duration: number;
  album: string;
};

type Author = {
  id: string;
  uniqueId: string;
  nickname: string;
  avatarThumb: string;
  avatarMedium: string;
  avatarLarger: string;
  signature: string;
  verified: boolean;
  secUid: string;
  secret: boolean;
  ftc: boolean;
  relation: number;
  openFavorite: boolean;
  commentSetting: number;
  duetSetting: number;
  stitchSetting: number;
  privateAccount: boolean;
};

type Video = {
  id: string;
  height: number;
  width: number;
  duration: number;
  ratio: string;
  cover: string;
  originCover: string;
  dynamicCover: string;
  playAddr: string;
  downloadAddr: string;
  shareCover: string[];
  reflowCover: string;
  bitrate: number;
  encodedType: string;
  format: string;
  videoQuality: string;
  encodeUserTag: string;
  codecType: string;
  definition: string;
};

export type UserFeedItem = {
  id: string;
  desc: string;
  createTime: number;
  video: Video;
  author: Author;
  music: Music;
  challenges: Challenge[];
  stats: Stats;
  duetInfo: DuetInfo;
  originalItem: boolean;
  officalItem: boolean;
  textExtra: TextExtra[];
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  itemMute: boolean;
  effectStickers?: EffectSticker[] | undefined;
  authorStats: AuthorStats;
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  shareEnabled: boolean;
  isAd: boolean;
  duetDisplay: number;
  stitchDisplay: number;
};

export type UserFeedList = UserFeedItem[];
