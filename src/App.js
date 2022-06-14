import Header from "./component/Header";
import Cart from "./component/Cart";
import "./app.css"

const data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTNg0-p9VAvpqVr5J3_hE3Py3d8DUEhnvhvKy16VI-6IdmpYhcKV-e15AmNeT8MKEtVJBnzLGjqGIzPo0QQzw3gaIXrPqb-75_tOuYzTQ&usqp=CAE",
    price: "97000 P",
    oldPrice: '105 000 P',
    name: "MacBook",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnpGa4bLS7c69gAT91u2ndCw7vIPyelB1c-lXxx5xoodwopklGV5tnndmRvijz5kUBxxLCh1y_Zc-91GQznvB9zf0AScVIBxr91HOMvzDB1WFvxB9H0BzY&usqp=CAE",
    price: "50 000 P",
    oldPrice: '55 000 P',
    name: "Samsung",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlUeuHxcUpuyjfxl22PG7YVfqJNcyzM6Kp1483oS0oIbGOLZFVU_i71mCiWpuXbY_vWWQVXIaivB39S9c9zRtjAXi3XBRa3OEBgdLeHIFyqNhacw7EhLPoRVY&usqp=CAE",
    price: "60 000 P",
    oldPrice: '65 000 P',
    name: "Скутер",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7E5JxaPxJGLm26U7-LHBHis5Wtr-FhIq6eNKTVIZWmcBhxbwV3F_KCQBnBRUFrj_NrCuNWm0sKTbds02e0eoblY39-1zhreA1-ND-tre0zNsnlKDqZJ4WBg&usqp=CAE",
    price: "120 000 P",
    oldPrice: '125 000 P',
    name: "Монитор",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSU3YtCJffNi7Zid0MX5g0KdRZg4f61VEvFqqiTsxErDm3U4zBOJbhLOLYZE1vMt_Wk97s518tQpiec0XyPvlp7lFEspkuDQ1a4NPq12CW7o4MXyPb48Re14Q&usqp=CAE",
    price: " 2 500 P",
    oldPrice: '3 000 P',
    name: "Респераторная маска",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsLywiAlCdLs6o82WM0eZ0Jke3xL3M7qn-ChVNE0ADvCPfYFPuM0be8jXHst9gBrANvE3-xAZAAAMMnpOi0OoHaK1wz4qEoflMvGfrmGoHtqID1tHJHaB7&usqp=CAE",
    price: " 25 500P ",
    oldPrice: '35 000 P',
    name: "Стиральная машинка",
  },
];
function App() {
  return (
    <>
    <div className="sekciya">
      <Header />
      <main className="main1">
      {data.map((item) => (
        <Cart image={item.image} price={item.price} name={item.name} oldPrice = {item.oldPrice} />
      ))}
      </main>
      </div>
    </>
  );
}

export default App;
