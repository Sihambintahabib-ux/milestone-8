import { Outlet } from "react-router";
import Header from "./header/Header";

const Root = () => {
    return (
        <div>
            {/* <h1>I am root</h1> */}
            <Header></Header>
<Outlet></Outlet>
        </div>
    );
};

export default Root;