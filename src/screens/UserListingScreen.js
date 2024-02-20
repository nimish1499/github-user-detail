import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const UserListingScreen = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const clickHandler = (userData) => {
    navigate(`/user/${userData?.login}`);
  };

  return (
    <>
        <Header/>
        <div className="container">
      {users?.map((curElem, index) => {
        return (
          <div className="card_item" key={curElem.id}>
            <div className="card_inner">
              <div className="userImg">
                <img
                loading="lazy"
                src={curElem.avatar_url} alt="" />
              </div>
              <div className="userName">{curElem.login}</div>
              <div className="userUrl">{curElem.url}</div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler(curElem);
                }}
                className="seeMore"
              >
                See More
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default UserListingScreen;
