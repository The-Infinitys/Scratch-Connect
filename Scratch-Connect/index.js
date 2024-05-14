const scratchConnect = {
  home:{
    getHealth: async () => {
      const response = await fetch("https://api.scratch.mit.edu/health");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    },
    getNews: async (limit=10,offset=0) => {
      const response = await fetch("https://api.scratch.mit.edu/news?limit="+limit.toString()+"&offset="+offset.toString());
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    },
  },
};

(async () => {
  try {
    const healthData = await scratchConnect.home.getHealth();
    console.log(healthData.version);
  } catch (error) {
    console.error(error);
  }
})();
