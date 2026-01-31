# Schema Plan for PodPulse

## Overview
This schema supports the core features of PodPulse: podcast discovery, subscription management, episode playback, and creator promotion.

## Tables

### 1. profiles
Extends the default Supabase `auth.users` table to store public user information.
- `id` (uuid, PK): References `auth.users.id`.
- `username` (text, unique): Unique handle for the user.
- `full_name` (text): Display name.
- `avatar_url` (text): URL to profile picture.
- `bio` (text): Short user biography.
- `is_creator` (boolean): Flag to distinguish between regular listeners and podcast creators. Default `false`.
- `created_at` (timestamptz): Timestamp of profile creation.
- `updated_at` (timestamptz): Timestamp of last update.

### 2. podcasts
Stores podcast show metadata.
- `id` (uuid, PK): Unique identifier.
- `owner_id` (uuid, FK): References `profiles.id` (if the podcast is claimed/owned by a user on the platform). Nullable (for aggregated feeds).
- `title` (text): Podcast name.
- `description` (text): Detailed description.
- `author` (text): Name of the author/publisher.
- `cover_image_url` (text): URL to the podcast artwork.
- `rss_feed_url` (text, unique): Source RSS feed.
- `category` (text): Primary genre/category (e.g., "Technology", "Comedy").
- `language` (text): ISO language code (e.g., "en", "es").
- `created_at` (timestamptz): Record creation time.
- `updated_at` (timestamptz): Record update time.

### 3. episodes
Individual episodes belonging to a podcast.
- `id` (uuid, PK): Unique identifier.
- `podcast_id` (uuid, FK): References `podcasts.id` (ON DELETE CASCADE).
- `title` (text): Episode title.
- `description` (text): Show notes/description.
- `audio_url` (text): Direct URL to the audio file.
- `duration` (integer): Duration in seconds.
- `published_at` (timestamptz): When the episode was released.
- `episode_number` (integer): Sequential number (if available).
- `created_at` (timestamptz): Record creation time.

### 4. subscriptions
Tracks which podcasts a user follows.
- `id` (uuid, PK): Unique identifier.
- `user_id` (uuid, FK): References `profiles.id` (ON DELETE CASCADE).
- `podcast_id` (uuid, FK): References `podcasts.id` (ON DELETE CASCADE).
- `created_at` (timestamptz): When the subscription started.
- **Constraint**: Unique combination of `user_id` and `podcast_id`.

### 5. listening_history
Tracks playback progress for continuity across sessions.
- `id` (uuid, PK): Unique identifier.
- `user_id` (uuid, FK): References `profiles.id` (ON DELETE CASCADE).
- `episode_id` (uuid, FK): References `episodes.id` (ON DELETE CASCADE).
- `progress_seconds` (integer): Current playback position in seconds.
- `is_completed` (boolean): Whether the episode has been fully listened to.
- `last_listened_at` (timestamptz): Timestamp of last activity.
- **Constraint**: Unique combination of `user_id` and `episode_id`.

### 6. notifications
System notifications for users.
- `id` (uuid, PK): Unique identifier.
- `user_id` (uuid, FK): References `profiles.id` (ON DELETE CASCADE).
- `type` (text): Enum-like string (e.g., 'new_episode', 'system_alert').
- `title` (text): Notification headline.
- `message` (text): Notification body.
- `is_read` (boolean): Default `false`.
- `action_url` (text): Deep link or URL relevant to the notification (optional).
- `created_at` (timestamptz): Timestamp.

## Security (RLS) Policies

### profiles
- **Read**: Public (everyone can see user profiles).
- **Update**: Users can update their own profile only.

### podcasts
- **Read**: Public.
- **Insert/Update**: Only authenticated users with `is_creator` = true (for their own podcasts).

### episodes
- **Read**: Public.
- **Insert/Update**: Only authenticated users with `is_creator` = true (if they own the podcast).

### subscriptions
- **Read/Write**: Users can read and modify their own subscriptions only.

### listening_history
- **Read/Write**: Users can read and modify their own history only.

### notifications
- **Read/Write**: Users can read and modify their own notifications only.
