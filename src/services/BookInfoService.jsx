const BookInfoService = {
  getData: async () => {
    let data = await fetch('data/bookinfo_data.json');
    data = await data.json();

    return data;
  },
};

export default BookInfoService;
