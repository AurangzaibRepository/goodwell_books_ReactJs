const BooksService = {
  getData: async () => {
    let data = await fetch('data/books_data.json');
    data = await data.json();

    return data;
  },
};

export default BooksService;
