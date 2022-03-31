import React from "react";
import Header from "./Header";

class MainLayout extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <div className="appLayout">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default MainLayout