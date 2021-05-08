import propTypes from "prop-types";

function Potato({name, image , rating}){
  return (
  <div>
    <h2>i like {name} </h2>
    <h4>{rating} / 5.0  </h4>
    <img src = {image} alt={name} />
  </div>
  )
}

Potato.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  rating: propTypes.number
}

var food = [
  {
    id: 1,
    name: "kimchi",
    image: "https://lh3.googleusercontent.com/proxy/z51iB3z4AEV69r_Vin01LBsD5tQg2wEz3TOb17lIRXj85smxmxT5fEpwocUc6mr71R75uk2oW5v29LAUVHw6ubF5J9DSaPa0WrsJdYn6LAu6QLNxsZNKX7MSd6nZWlVg",
    rating: 4.2
  },
  {
    id: 2,
    name: "ramen",
    image: "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "kimbab",
    image: "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg",
    rating: 5.2
  }
]

function App() {
  return (
    <div>

      hello sidhd sidhd
      {food.map(dish => (
        <Potato key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
      ))}

    </div>
  );
}

export default App;
