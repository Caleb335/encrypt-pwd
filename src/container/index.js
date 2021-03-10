import React from "react";
import axios from "axios";
import Card from "../../components/card";

const App = () => {
  const [data, setData] = React.useState([]);

  const getPosts = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");

    setData(result.data);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="posts-zone">
        {data.map((posts, id) => {
          return (
            <Card key={id}>
              <h3>{posts.title}</h3>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default App;
