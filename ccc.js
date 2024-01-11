const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

function Car(props) {
  return <h2>I am a {props.coloooor} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="reeed"/>);

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a new Car!</h2>;
  }
}


export default Blogses;

const Blogs = () => {
  return <h2>Blog Articles</h2>;
};

export default Blogs;

