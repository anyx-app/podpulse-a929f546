export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          is_creator: boolean
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          is_creator?: boolean
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          is_creator?: boolean
          created_at?: string
          updated_at?: string | null
        }
      }
      podcasts: {
        Row: {
          id: string
          owner_id: string | null
          title: string
          description: string | null
          author: string | null
          cover_image_url: string | null
          rss_feed_url: string | null
          category: string | null
          language: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          owner_id?: string | null
          title: string
          description?: string | null
          author?: string | null
          cover_image_url?: string | null
          rss_feed_url?: string | null
          category?: string | null
          language?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          owner_id?: string | null
          title?: string
          description?: string | null
          author?: string | null
          cover_image_url?: string | null
          rss_feed_url?: string | null
          category?: string | null
          language?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      episodes: {
        Row: {
          id: string
          podcast_id: string
          title: string
          description: string | null
          audio_url: string
          duration: number | null
          published_at: string | null
          episode_number: number | null
          created_at: string
        }
        Insert: {
          id?: string
          podcast_id: string
          title: string
          description?: string | null
          audio_url: string
          duration?: number | null
          published_at?: string | null
          episode_number?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          podcast_id?: string
          title?: string
          description?: string | null
          audio_url?: string
          duration?: number | null
          published_at?: string | null
          episode_number?: number | null
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          podcast_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          podcast_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          podcast_id?: string
          created_at?: string
        }
      }
    }
  }
}
