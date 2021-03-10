import React from "react";
import axios from "axios";
import Card from "../../components/card";
import Grid from "@material-ui/core/Grid";
import Loader from "../../components/loader";

const App = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getPosts = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");

    setData(result.data);
  };

  React.useEffect(() => {
    // adding a second delay
    // so the loading component gets to be displayed
    // in the DOM for a while
    setTimeout(() => {
      getPosts();
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="posts-zone">
        {!loading ? (
          <Grid container spacing={4}>
            {data.map((posts, id) => {
              return (
                <Grid key={id} item xs={12} sm={6} lg={4} className="card">
                  <Card>
                    <div className="article-img">
                      <img
                        src={`https://avatars.dicebear.com/v2/avataaars/{{${posts.id}}}.svg?options[mood][]=happy`}
                      />
                    </div>
                    <p className="title">{posts.title}</p>
                    <div className="details">
                      <p>{posts.body}</p>
                    </div>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
