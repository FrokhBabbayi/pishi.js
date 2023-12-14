const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}


export default Blogs;

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;

