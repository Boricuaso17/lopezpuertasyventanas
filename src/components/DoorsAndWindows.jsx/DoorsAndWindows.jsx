import React from "react";
import { Header }  from '../Header/Header'
import { Footer } from "../Footer/Footer";
import styles from '../../static/styles.module.css'; // For CSS Modules

export const DoorsAndWindows = () => {
    return (
        <>
        <Header />
        <div id="middle">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id="puertas" src="../src/static/images/ventanas/ventana1.jpg" className={`${styles.d-block} ${w-100}`} alt="" />
                    </div>
                </div>

                <button className={styles.carousel-control-prev} type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev" onClick={() => {carouselPhotos('ventanas')}}>
                    <span className={styles.carousel-control-prev-icon} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next" onClick={() => {carouselPhotos('ventanas')}}>
                    <span className={styles.carousel-control-next-icon} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <Footer />
        </>
    )
}