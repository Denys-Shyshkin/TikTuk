export type ErrorObject = {
  message: string;
};

type AuthorMeta = {
  id: string;
  secUid: string;
  name: string;
  nickName: string;
  verified: boolean;
  signature: string;
  avatar: string;
  following: number;
  fans: number;
  heart: number;
  video: number;
  digg: number;
};

type MusicMeta = {
  musicId: string;
  musicName: string;
  musicAuthor: string;
  musicOriginal: boolean;
  musicAlbum: string;
  playUrl: string;
  coverThumb: string;
  coverMedium: string;
  coverLarge: string;
  duration: number;
};

type Covers = {
  default: string;
  origin: string;
  dynamic: string;
};

type VideoMeta = {
  height: number;
  width: number;
  duration: number;
};

export type Hashtag = {
  id: string;
  name: string;
  title: string;
  cover: string;
};

type EffectSticker = {
  id: string;
  name: string;
};

export type FeedPostItem = {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: AuthorMeta;
  musicMeta: MusicMeta;
  covers: Covers;
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: VideoMeta;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: boolean;
  mentions: string[];
  hashtags: Hashtag[];
  effectStickers: EffectSticker[];
};

export type TrendingFeedList = FeedPostItem[];
