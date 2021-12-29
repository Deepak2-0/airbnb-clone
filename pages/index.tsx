import type { NextPage } from "next";
import Head from "next/head";

import houses from "../houses";
import House from "../component/House";
import Layout from "../component/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <main>
                    <h2>Places to Stay</h2>
                    <div className="houses">
                        {houses.map((house) => (
                            <House key={house.id} {...house} />
                        ))}
                    </div>
                    <style jsx>{`
                        .houses {
                            display: grid;
                            grid-template-columns: 49% 49%;
                            grid-template-rows: 300px 300px;
                            grid-gap: 2%;
                        }
                    `}</style>
                </main>
            </Layout>
        </>
    );
};

export default Home;
