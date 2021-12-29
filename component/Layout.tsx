const Layout = (props: any) => {
    return (
        <div>
            <main>{props.children}</main>
            <style jsx>{`
                main {
                    position: relative;
                    max-width: 56em;
                    background-color: white;
                    padding: 2em;
                    margin: 0 auto;
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

export default Layout;
