const PodcastService = {
  getData: async () => {
    let data = await fetch('data/podcast_data.json');
    data = await data.json();

    return data;
  },
};

export default PodcastService;
