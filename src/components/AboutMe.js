import React from "react";
import image from "../assets/img/fatima.jpg";

function AboutMe() {

    return(
        <section className="container">
            <h2 class="top-title">Fatima Zahra Baloch</h2>
            <hr></hr>
            <div>
                <img className="mb-5"  src={image} />
                <p>
                web developer
                </p>

                <p>

                Associate Degree of Prenursing.

                </p>

                <p>

               Current student at UW bootcamp Coding.
                </p>

            </div>

        </section>

    )

}

export default AboutMe;