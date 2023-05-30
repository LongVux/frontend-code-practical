import "./App.css";
import { LazyImage } from "./components/dump/lazy-image/LazyImage";
import { SearchInput } from "./components/dump/search-input/SearchInput";
import { UserProfileCard } from "./components/smart/user-profile-card/UserProfileCard";
import { getProfileImageByUrl } from "./service/ApiService";

function App() {
  return (
    <div className="App">
      <LazyImage
        src="/images/profiles/molestiasvelitneque.png"
        alt={`bla`}
        getImage={getProfileImageByUrl}
      />

      <SearchInput onSearch={() => Promise.resolve(true)} />

      <UserProfileCard />
    </div>
  );
}

export default App;
