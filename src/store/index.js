import { defineStore } from "pinia";
import axios from "axios";

export const useStreamStore = defineStore("stream", {
  state: () => ({
    streams: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchStreams() {
      this.loading = true;
      this.error = null;

      const users = [
        "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
        "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"
      ];

      try {
        const responses = await Promise.all(
          users.map(async (user) => {
            try {
              const response = await axios.get(
                `https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/${user}`
              );
              return response.data;
            } catch (error) {
              console.error(`Error fetching ${user}:`, error);
              return { stream: null };
            }
          })
        );

        this.streams = responses.map((res, index) => ({
          id: index,
          name: users[index],
          isLive: res.stream !== null,
          game: res.stream?.game || "N/A",
          viewers: res.stream?.viewers || "0",
          title: res.stream?.channel?.status || "No title available",
          url: `https://www.twitch.tv/${users[index]}`,
        }));
      } catch (error) {
        this.error = "Error fetching streams.";
        console.error("Error fetching streams:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});
