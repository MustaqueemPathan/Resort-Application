import React, { Component } from "react";
import Title from "./Title";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHiking />,
        title: "free Cocktails",
        info: `Lorem ipsum dolor sit amet, eum ea dicant 
            libris. Ei mei nobis scriptorem, no nec iusto nostro 
            cetero. Modo verear an vim, vel te tempor adipiscing. `
      },
      {
        icon: <FaCocktail />,
        title: "Endless Hiking",
        info: `Lorem ipsum dolor sit amet, eum ea dicant 
                libris. Ei mei nobis scriptorem, no nec iusto nostro 
                cetero. Modo verear an vim, vel te tempor adipiscing. `
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: `Lorem ipsum dolor sit amet, eum ea dicant 
                    libris. Ei mei nobis scriptorem, no nec iusto nostro 
                    cetero. Modo verear an vim, vel te tempor adipiscing. `
      },
      {
        icon: <FaBeer />,
        title: "strongest milk",
        info: `Lorem ipsum dolor sit amet, eum ea dicant 
                        libris. Ei mei nobis scriptorem, no nec iusto nostro 
                        cetero. Modo verear an vim, vel te tempor adipiscing. `
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p className="text-align:justify">{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
