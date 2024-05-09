import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../utils";

const SearchBox = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    /* if search input greater the 2. then run this function */
    if (searchText.length > 2) {
      /* random token  */
      const generatedToken = UseTokenGenerator();
      /* encrypted post data */
      const encryptedData = UseEncryptData(generatedToken);
      const getSearchData = async () => {
        const res = await fetch(API.searchEvent, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: searchText,
            token: encryptedData,
          }),
        });
        const data = await res.json();
        if (data?.result?.length > 0) {
          localStorage.removeItem("showSearchValue");
          localStorage.setItem("showSearchValue", true);
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* filter the search value */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  /* hide the search modal */
  const handleHideDropdown = () => {
    setShowInput(false);
    localStorage.removeItem("showSearchValue");
  };

  return (
    <div className="search-box">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="search"
        placeholder="Search here"
        className={`form-control ${showInput ? "search-input-show" : ""}`}
      />

      <i
        onClick={() => setShowInput(!showInput)}
        className="fas fa-search-plus"
      ></i>

      {/*  */}
      {data?.length > 0 && localStorage.getItem("showSearchValue") && (
        <div className="search-list">
          {categories.map((category) => (
            <>
              <div className="search-game-name">
                <b>{category}</b>
              </div>
              {data
                .filter((item) => item.eventType === category)
                .map((item, i) => (
                  <Link
                    onClick={handleHideDropdown}
                    key={i}
                    to={`/game-details/${item?.eventTypeId}/${item?.eventId}`}
                  >
                    <div className="search-list-item">
                      <div className="search-tournament-name">
                        <b>{item?.name}</b>
                      </div>
                      <div className="search-game-date">{item?.openDate}</div>
                    </div>
                  </Link>
                ))}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
