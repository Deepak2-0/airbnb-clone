import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import houses from "../../houses";
import { HouseType } from "../../utils/types";
import Layout from "../../component/Layout";

export default function House (props : any) {
    return (
        <Layout>
            <Head>
                <title>{props.house.title}</title>
            </Head>
            <Image
                src={props.house.picture}
                width="100%"
                height="100%"
                alt="House picture"
            />
            <p>
                {props.house.type} - {props.house.town}
            </p>
            <p>{props.house.title}</p>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    return {
        props: {
            house: houses.filter(
                (house) => house.id === parseInt(id as string)
            )[0],
        },
    };
};
