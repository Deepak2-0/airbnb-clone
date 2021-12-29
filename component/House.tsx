import Link from "next/link";

import { HouseType } from "../utils/types";
import Image from "next/image";

const House = (props: HouseType) => {
    const { id, picture, type, town, title } = props;
    return (
        <Link href={`/house/${id}`}>
            <a>
                <section>
                    <Image
                        src={picture}
                        alt="A House"
                        width="100%"
                        height="100%"
                    />
                    <p>
                        {type} - {town}
                    </p>
                    <p>{title}</p>
                </section>
            </a>
        </Link>
    );
};

export default House;
