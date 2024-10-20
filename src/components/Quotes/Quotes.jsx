import React from "react";

export const Qoutes = () => {

    return (
        <div id="middle">
            <form method="post" action="./send_email.php">
                <label for="name">Nombre:</label>
                <input class='quotesInput' type="text" name="name" id="name" required />

                <label for="lname">Apellidos:</label>
                <input class='quotesInput' type="text" name="lname" id="lname" required />

                <label for="phone">Teléfono:</label>
                <input class='quotesInput' type="tel" name="phone" id="phone" required />

                <label for="email">Email:</label>
                <input class='quotesInput' type="email" name="email" id="email" required />

                <label for="message">Mensaje / Comentarios:</label>
                <textarea class='quotesInput' name="message" id="message" required></textarea>

                <button type="submit">Someter</button>
            </form>
        </div>
    )
}