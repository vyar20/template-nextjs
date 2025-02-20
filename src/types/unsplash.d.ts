/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UnsplashResponse {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: UnsplashDLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: any;
  asset_type: string;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: Tag[];
  views: number;
  downloads: number;
  topics: any[];
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface UnsplashDLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: string;
  city: null;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Meta {
  index: boolean;
}

export interface Tag {
  type: Type;
  title: string;
}

export enum Type {
  Search = 'search',
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: null;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: null;
  twitter_username: null;
  paypal_email: null;
}
