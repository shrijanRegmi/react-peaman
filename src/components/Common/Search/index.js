import "./style.scss";
import { ReactComponent as SearchIcon } from "../../../assets/svgs/search_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../avatar";
import Scrollbars from "react-custom-scrollbars";
import { useRef } from "react";
import Spinner from "../Spinner/spinner";
import { searchUsersAction } from "../../../store/actions/Users";

const SearchComponent = () => {
  const searchedUsers = useSelector(
    (state) => state.usersReducer.searchedUsers
  );
  const searchResultContainer = useRef();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.usersReducer.isSearchingUser);

  const handleOnChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      searchResultContainer.current.style.display = "none";
    } else {
      dispatch(searchUsersAction(value));
      searchResultContainer.current.style.display = "block";
    }
  };

  return (
    <div className="peaman-search">
      <div className="peaman-search-input-container">
        <div className="d-flex">
          <SearchIcon
            style={{
              marginRight: 20,
            }}
          />
          <input
            type="text"
            placeholder="Search someone awesome..."
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div
        className="peaman-search-results-container"
        ref={searchResultContainer}
      >
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : searchedUsers.length === 0 ? (
          <div>No result</div>
        ) : (
          <Scrollbars autoHide>
            <p>Users</p>
            {searchedUsers.map((user) => {
              return (
                <div
                  key={user.uid}
                  className="d-flex my-2 align-items-center w-100 user-item-container"
                >
                  <Avatar
                    imgUrl={user.photoUrl}
                    radius={30}
                    style={{
                      backgroundColor: "var(--color-light-grey)",
                    }}
                  />
                  <p>{user.name}</p>
                </div>
              );
            })}
          </Scrollbars>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
