const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Dolphind.jpg/200px-Dolphind.jpg";
const date = 'created 4/11/2018';
const blogPosts = [
    {id: 1, name: 'top', category: 'clothes', author: 'me', description: text, image: imageUrl, date: date, quantity: 1},
    {id: 2, name: 'pants', category: 'clothes', author: 'me', description: text, image: 'https://st.depositphotos.com/1000393/3359/i/950/depositphotos_33592593-stock-photo-grass-world.jpg', date: date },
    {id: 3, name: 'Mac', category: 'technology', author: 'me', description: text, image: "http://www.oxiab.com/blogimages/blog/00040_foto_blog.jpg", date: date, quantity: 1 },
    {id: 4, name: 'shorts', category: 'clothes', author: 'me', description: text, image: imageUrl, date: date },
    {id: 5, name: 'TV', category: 'technology', author: 'me', description: text, image: imageUrl, date: date },
    {id: 6, name: 'Pepsi', category: 'food_and_beverage', author: 'me', description: text, image: imageUrl, date: date },
    ];

export default blogPosts;