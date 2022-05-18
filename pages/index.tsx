import type { NextPage } from "next";

import Layout from "components/Layout";
import { Card, CardBody, CardHeader } from "components/Card";
import List from "components/List";

const Home: NextPage = () => {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <div className="fw-bold">Card Header</div>
        </CardHeader>
        <CardBody>
          <List data={["makan", "tidur", "minum"]} />
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Home;
