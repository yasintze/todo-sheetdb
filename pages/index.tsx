import { useState } from "react";
import type { NextPage } from "next";

import Layout from "components/Layout";
import { Card, CardBody, CardHeader } from "components/Card";
import List, { IList } from "components/List";

interface HomeProps {
  data: IList[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [inputSearch, setInputSearch] = useState("");

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
            <input placeholder="New Todo" className="form-control" />
            <button className="btn btn-secondary" type="button">
              Add Todo
            </button>
          </div>
        </CardBody>
      </Card>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://sheetdb.io/api/v1/aqxi7bzh59b4o");
  const data = await res.json();

  return { props: { data } };
}

export default Home;
