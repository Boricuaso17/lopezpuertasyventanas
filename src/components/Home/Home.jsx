import React from "react";
import { Header }  from '../Header/Header'
import { Footer } from "../Footer/Footer";
import styles from '../../static/styles.module.css'; // For CSS Modules


export const Home = () => {

    return (<>
    <Header />
        <div id="middle">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className={styles.carousel-inner}>
                    <div className={`${styles.carousel-item} ${styles.active}`}>
                        <img id="puertas" src="./images/homePhoto1.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev" onClick={() => {carouselPhotos('inicio')}}>
                    <span className={styles.carousel-control-prev-icon} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next" onClick={() => {carouselPhotos('inicio')}}>
                    <span className={styles.carousel-control-next-icon} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
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