import { Router } from "./router/Router";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/T-0EW-SEbsE",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

function App() {
  return <Router />;
}

export default App;
