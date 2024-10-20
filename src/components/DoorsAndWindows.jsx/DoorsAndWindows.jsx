import React from "react";
import Header from '../Header/Header'
import { Footer } from "../Footer/Footer";



export const DoorsAndWindows = () => {
    return (
        <>
        <Header />
        <div id="middle">
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="puertas" src="./images/ventanas/ventana1.jpg" class="d-block w-100" alt="" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev" onClick={carouselPhotos('ventanas')}>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next" onClick={carouselPhotos('ventanas')}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <Footer />
        </>
    )
}