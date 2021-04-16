import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <Content />
                <Footer/>

            </div>
        );
    }
}

export default Main;