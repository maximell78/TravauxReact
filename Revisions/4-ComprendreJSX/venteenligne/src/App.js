import Cart from "./components/cart/Cart.js";
import Description from "./components/description/Description.js";
import Photo from "./components/photo/Photo.js";
import Title from "./components/title/Title.js";
import Comment from "./components/comment/Comment.js";
import Card from "./components/card/Card.js";

const articles = [
  { id: 1, name: "Webcam" },
  { id: 2, name: "Souris" },
];

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function App() {
  return (
    <div>
      <Title name="John Doe" />
      <h1>Composant Description</h1>
      <Description />
      <h1>Composant Card</h1>
      <h4>Un composant simple</h4>
      <Card />
      <h1>Composant Cart</h1>
      <h4>un composant avec une prop articles (tableau d'article)</h4>
      <Cart articles={articles} />
      <h1>Composant Photo</h1>
      <h4>
        un composant avec 2 Props src et width ainsi que la propriete props
        children pour injecter du contenu dans notre composant enfant
      </h4>
      <Photo
        src="https://via.placeholder.com/75/000000/FFFFFF/?text=Une Photo"
        width="200"
      >
        Source Unsplash, Captured By @mcramblett
      </Photo>
      <h1>Composant Commentaire</h1>
      <h4>Un composant avec une props comment</h4>
      <Comment comment={comment} />
    </div>
  );
}

export default App;
