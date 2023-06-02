import React, { useEffect, useState } from "react";
import axios from "axios";
import { throttle } from "lodash";

const SearchPageTest = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10); // 페이지당 항목 수

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        console.log("loading is true");
        const response = await axios.get(
          `http://localhost:9999/user?page=${page}&perPage=${itemsPerPage}`
        );
        console.log("page:", page);
        const newUsers = response.data;
        setUsers(newUsers);
        setIsLoading(false);
        console.log("loading is stopped");
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [page, itemsPerPage]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const handleScrollThrottled = throttle(handleScroll, 200); // 스크롤 이벤트 쓰로틀링 적용
    window.addEventListener("scroll", handleScrollThrottled);
    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  return (
    <div>
      <select
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
      >
        <option value={10}>10개</option>
        <option value={20}>20개</option>
        <option value={30}>30개</option>
      </select>

      {users.map((user) => (
        <div key={user.id}>
          <p>--id--{user.id}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
          <p>{user.address}</p>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default SearchPageTest;
