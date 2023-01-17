import React from "react";
import { Featured } from "../../components/featured/Featured";
import { Header } from "../../components/header/Header";
import { NavBar } from "../../components/navbar/NavBar";
import { PropertyList } from "../../components/propertyList/PropertyList";
import { FeaturedPropertis } from "../../components/featuredPropertis/FeaturedPropertis";
import { MailList } from "../../components/mailList/MailList";
import { Footer } from "../../components/footer/Footer";

import './home.css';

export const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle"> Browse be property type</h1>
                <PropertyList />
                <h1 className="homeTitle"> Browse be property type</h1>
                <FeaturedPropertis />
                <MailList />
                <Footer />

            </div>
        </div>
    )
}