import React from "react";
import Header from '../Header/Header'
import { Footer } from "../Footer/Footer";

export const Home = () => {

    return (<>
    <Header />
        <div id="middle">
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="puertas" src="./images/homePhoto1.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev" onclick="carouselPhotos('inicio')">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next" onclick="carouselPhotos('inicio')">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div id="middle2">
            <h2>INSTALACIONES A TODA LA ISLA</h2>
            <ul>
                <li><h3>Puertas de seguridad en aluminio</h3></li>
                <li><h3>Ventanas de seguridad en aluminio</h3></li>
                <li><h3>Puertas de Garaje</h3></li>
                <li><h3>Puertas de Closet</h3></li>
                <li><h3>Screens</h3></li>
                <li><h3>Puertas para Terrazas</h3></li>
            </ul>

            <a >Ver Productos y Servicios</a>
        </div>
        <Footer />
    </>
    )
}