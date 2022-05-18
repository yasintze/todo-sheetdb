import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import { Card, CardBody, CardHeader } from "components/Card";
import List, { IList } from "components/List";

interface HomeProps {
  data: IList[];
}

const apiUrl = "https://sheetdb.io/api/v1/aqxi7bzh59b4o";

const Home: NextPage<HomeProps> = ({ data }) => {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");
  const [inputTodo, setInputTodo] = useState("");

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleSubmit = async () => {
    if (inputTodo.length > 0) {
      const params = {
        data: [{ title: inputTodo }],
      };

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (res.status < 300) {
        setInputTodo("");
        refreshData();
      } else {
        alert("Input failed!");
      }
    }
  };

  return (
    <Layout>
      <Card>
        <CardHeader>
          <div className="fw-bold">Card Header</div>
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            style={{ width: "12rem" }}
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </CardHeader>
        <CardBody>
          <List
            data={
              !inputSearch
                ? data
                : data.filter((item) => item.title === inputSearch)
            }
          />
          <div className="input-group mt-3">
            <input
              placeholder="New Todo"
              className="form-control"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleSubmit}
            >
              Add Todo
            </button>
          </div>
        </CardBody>
      </Card>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  return { props: { data } };
}

export default Home;
