import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import Profile from "../components/Profile";
import Loading from "../components/Loading";

function UserDetailScreen() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(6);
  const [isloading, setIsLoading] = useState(false);

  const { username } = useParams();
  const navigate = useNavigate();
  const [pageref, pageView] = useInView({
    threshold: 0,
  });

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${page}&sort=updated`
      );
      const data = await res.json();
      setItems(data);
      setIsLoading(false);
    };

    fetchRepos();
  }, [username, page]);

  // To increase the page to calll the api for infinite scrolling
  useEffect(() => {
    if (pageView) {
      setIsLoading(true);
      setPage((page) => page + 6);
    }
  }, [pageView]);

  return (
    <>
      <div onClick={goBack} className="mt-10">
        <button class="back-button font-bold">Back</button>
      </div>
      <div className="pt-10">
        <h1 className="mb-10 font-bold text-2xl text-[#857ecd]">
          Viewing {username}'s repositories
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
          {items?.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
      <div ref={pageref}>
        {isloading ? (
          <div className="flex justify-center items-center">
            <div
              className="animate-spin rounded-full h-4 w-4 border-b-4"
              style={{ borderColor: "#857ecd" }}
            ></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default UserDetailScreen;
