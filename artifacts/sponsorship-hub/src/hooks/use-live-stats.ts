import { useState, useEffect } from "react";

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined)
  ? `${(import.meta.env.VITE_API_BASE as string).replace(/\/$/, "")}/api`
  : "/api";
const FBF_PROXY = `${API_BASE}/fbf-proxy`;

export interface PlatformStats {
  totalViews: number;
  totalFollowers: number;
  totalComments: number;
  totalFounders: number;
  totalEpisodes: number;
  totalEvents: number;
  latestEventAttendance: number;
  communityMembers: number;
}

const FALLBACK_STATS: PlatformStats = {
  totalViews: 1280000,
  totalFollowers: 22300,
  totalComments: 3734,
  totalFounders: 45,
  totalEpisodes: 41,
  totalEvents: 12,
  latestEventAttendance: 304,
  communityMembers: 458,
};

export function useLiveStats() {
  const [stats, setStats] = useState<PlatformStats>(FALLBACK_STATS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [platformRes, episodesRes, eventsRes, fbxRes] = await Promise.allSettled([
          fetch(`${FBF_PROXY}/platform-stats`),
          fetch(`${FBF_PROXY}/episodes`),
          fetch(`${FBF_PROXY}/events`),
          fetch(`${FBF_PROXY}/fbx-engagement`),
        ]);

        const newStats = { ...FALLBACK_STATS };

        if (platformRes.status === "fulfilled" && platformRes.value.ok) {
          const data = await platformRes.value.json();
          if (data.totalViews) newStats.totalViews = data.totalViews;
          if (data.totalFollowers) newStats.totalFollowers = data.totalFollowers;
          if (data.totalComments) newStats.totalComments = data.totalComments;
          if (data.totalFounders) newStats.totalFounders = data.totalFounders;
        }

        if (episodesRes.status === "fulfilled" && episodesRes.value.ok) {
          const data = await episodesRes.value.json();
          if (Array.isArray(data)) newStats.totalEpisodes = data.length;
          else if (data.episodes) newStats.totalEpisodes = data.episodes.length;
        }

        if (eventsRes.status === "fulfilled" && eventsRes.value.ok) {
          const data = await eventsRes.value.json();
          if (Array.isArray(data)) {
            newStats.totalEvents = data.length;
            const latest = data[0];
            if (latest?.attendance) newStats.latestEventAttendance = latest.attendance;
          }
        }

        if (fbxRes.status === "fulfilled" && fbxRes.value.ok) {
          const data = await fbxRes.value.json();
          if (data.members) newStats.communityMembers = data.members;
        }

        setStats(newStats);
      } catch {
        // Use fallback stats
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading };
}
