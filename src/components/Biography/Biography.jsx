import React from 'react';
import style from './Biography.module.css';
import mantenimiento from '../../images/mantenimiento.jpg';
import covid from '../../images/covid.jpeg';
import logoSena from '../../images/logoSena.png';

function Biography() {
    return (
        <div className={style.fade_in}>
            <div className={style.card}>
                <p>
                    <img className={style.float_rigth} src={mantenimiento} alt="mantenimiento" />
                    Hola, mi nombre es Alexander Henao, desarrollador ReactJS junior. Desde niño sentí atracción por la tecnología y las matemáticas, por lo que al terminar de estudiar podía realizar mantenimiento de equipos de cómputo, además de dar clases privadas de refuerzo en el área de matemáticas a niños de primaria y bachillerato, pero con el tiempo solo continué realizando mantenimiento a los equipos de cómputo.
                </p>
            </div>
            <div className={style.card}>
                <p>
                    <img className={style.float_left} src={covid} alt="covid" />
                    Sin embargo, mi labor (como independiente) se vio interrumpida por la pandemia, lo que me dejaba mucho tiempo libre. Durante la cuarentena, aburrido de sin nada que hacer, comencé a aprender diagramas de flujo debido a un video de YouTube, lo que me llevo a otro y otro y en una semana estaba iniciando con un lenguaje de programación, JavaScript.
                </p>
            </div>
            <div className={style.card}>
                <p>
                    <img className={style.float_rigth} src={logoSena} alt="logosena" />
                    A partir de este momento continué aprendiendo cada día, me inscribí en y gradué como Técnico en programación de software del SENA y mejoré mis habilidades, conocí personas con el mismo objetivo que el mío con las que pude compartir conocimientos y ayudarnos a mejorar. Ahora han pasado dos años y continuo buscando mi objetivo de ser un desarrollador fullstack de talla mundial, esperando un empleo en esta apasionante profesión y pueda vivir en el lugar que me guste sin preocuparme del empleo en esa zona por el teletrabajo, lo que me permite tener más tiempo para estudiar y compartir con mi padre y mis seres queridos. Espero que el primer paso en mi camino pueda darlo con ustedes.  
                </p>
            </div>
        </div>
    );
}

export default Biography;