import "./App.css";

import Title from "./components/Title";
import Photo from "./components/Photo";
import Comment from "./components/Comment";

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
    <div className="App">
      <Title name="Sarah" />
      <Title name="Jack" />
      <Title name="Tom" />
      <Photo src="https://via.placeholder.com/75" width="200">
        <div>La photo a ete prise par.....</div>
      </Photo>
      <Comment comment={comment} />
    </div>
  );
}

export default App;
