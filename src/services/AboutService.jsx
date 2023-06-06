const AboutService = {
  getData: async () => {
    let data = await fetch('data/about_data.json');
    data = await data.json();

    return data;
  },
};

export default AboutService;
