const Butter = require("../butter");

// Mock data
const USERS = [
  { id: 1, name: "John Brown", username: "Joe", password: "string" },
  { id: 2, name: "Tim Green", username: "Ti123_45", password: "string" },
  { id: 3, name: "Ben Adams", username: "Boo.net", password: "string" },
];

const POSTS = [
  {
    id: 1,
    title: "----- Title 1 ---- Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing. Autem eligendi eos error itaque minus modi nobis non nostrum quo rerum vero voluptas, voluptatem voluptatum! Consequuntur fugit id inventore laudantium quos?  Aperiam assumenda deleniti dolore doloremque eum explicabo fugiat illum in incidunt iure magni minima mollitia nisi nobis nostrum obcaecati, odit possimus quaerat quis ratione tempore temporibus totam vel velit veniam?  Animi doloremque doloribus eaque error est eum expedita fuga illum iure iusto laborum magni, maxime minus officia omnis optio praesentium quia quibusdam quod sit tempora, tempore tenetur veniam, vero voluptates!",
    userId: 1,
  },
  {
    id: 2,
    title: "----- Title 2 ---- Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing. Autem eligendi eos error itaque minus modi nobis non nostrum quo rerum vero voluptas, voluptatem voluptatum! Consequuntur fugit id inventore laudantium quos?  Aperiam assumenda deleniti dolore doloremque eum explicabo fugiat illum in incidunt iure magni minima mollitia nisi nobis nostrum obcaecati, odit possimus quaerat quis ratione tempore temporibus totam vel velit veniam?  Animi doloremque doloribus eaque error est eum expedita fuga illum iure iusto laborum magni, maxime minus officia omnis optio praesentium quia quibusdam quod sit tempora, tempore tenetur veniam, vero voluptates!",
    userId: 2,
  },
  {
    id: 3,
    title: "----- Title 3 ---- Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing. Autem eligendi eos error itaque minus modi nobis non nostrum quo rerum vero voluptas, voluptatem voluptatum! Consequuntur fugit id inventore laudantium quos?  Aperiam assumenda deleniti dolore doloremque eum explicabo fugiat illum in incidunt iure magni minima mollitia nisi nobis nostrum obcaecati, odit possimus quaerat quis ratione tempore temporibus totam vel velit veniam?  Animi doloremque doloribus eaque error est eum expedita fuga illum iure iusto laborum magni, maxime minus officia omnis optio praesentium quia quibusdam quod sit tempora, tempore tenetur veniam, vero voluptates!",
    userId: 3,
  },
];

const PORT = 8000;

const server = new Butter();

// Files Routes
server.route("get", "/", (req, res) => {
  res.sendFile("./public/index.html", "text/html");
});

server.route("get", "/styles.css", (req, res) => {
  res.sendFile("./public/styles.css", "text/css");
});

server.route("get", "/scripts.js", (req, res) => {
  res.sendFile("./public/scripts.js", "text/javascript");
});

// JSON Routes
server.route("get", "/api/posts", (req, res) => {
  const posts = POSTS.map((post) => {
    const user = USERS.find((user) => user.id === post.userId);
    return {
      ...post,
      author: user?.name || "",
    };
  });
  res.status(200).json(posts);
});

server.route("get", "/api/user", (req, res) => {
  res.status(200).json(USERS);
});

server.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});
