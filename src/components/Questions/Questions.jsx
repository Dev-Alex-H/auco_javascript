import React, { useEffect, useState } from 'react';
import style from './Questions.module.css';
import mongo from '../../images/mongo.png';

function Questions() {
    let resFor = [];
    let [resForAsync, setForAsync] = useState([]);
    let bandera = true;

    function forSync() {
        for (let i = 1; i <= 10; i++) {
            resFor.push(<li>{i}</li>)
        }
        return resFor;
    }
    useEffect(() => {
        function forAsync() {
            if (bandera) {
                for (let i = 1; i <= 10; i++) {
                    setTimeout(function () {
                        setForAsync(prev => prev.concat([<li>{i}</li>]))
                    }, 5000);
                }
                bandera = false;
            }
            return resForAsync;
        }
        forAsync()
    }, [])
    return (
        <div className={style.fade_in}>
            <div className={style.card}>
                <h2>Describa 5 funciones de agregación de MongoDB.</h2>
                <img className={style.float_rigth} src={mongo} alt="count" />
                <li><span>1 - Count</span></li>
                <p>Esta devuelve la cantidad de documentos total que tengo en una colección. Para usarla debemos agregar .count() sobre la colección, por ejemplo: db.getCollection('empleados').count().</p>
                <p>
                    <li><span>2 - Distinct</span></li>
                    Esta función retorna los elementos que tengan una coincidencia exacta con el atributo que pasamos como parámetro. Para usarlo debemos agregar .distinct("parámetro").
                </p>
                <li><span>3 - Agreggate</span></li>
                <p>
                    {`Podemos usar esta función para agrupar resultados de acuerdo a nuestras especificaciones, por ejemplo: db.getCollection('empleados').agreggate([{$group : {_id : "$experiencia", x : {$sum : 1}}}])`}.
                    Con esto agruparíamos a los empleados de acuerdo a su experiencia y guardamos en x la suma de la cantidad de coincidencias.
                </p>
                <p>
                    <li><span>4 - Agreggate</span></li>
                    {`Otro ejemplode agreggate sería: db.getCollection('empleados').agreggate([{$group : {_id : "$estado", x : {$avg : "$experiencia"}}}])`}.
                    Con esto agruparíamos a los empleados de acuerdo a su estado y guardamos en x el promedio de experiencia que tienen estos.
                </p>
                <p>
                    <li><span>5 - Agreggate</span></li>
                    {`Otro ejemplode agreggate sería: db.getCollection('empleados').agreggate([{$group : {_id : "$estado", x : {$max : "$experiencia"}}}])`}.
                    Con esto agruparíamos a los empleados de acuerdo a su estado y guardamos en x el valor máximo de experiencia que tiene algún empleado en el resultado..
                </p>
            </div>
            <div className={style.card}>
                <h2>
                    Explique la diferencia entre las funciones sincronas y asíncronas
                </h2>
                <p>Las funciones Síncronas son ejecutadas en orden, una instrucción seguida de la otra, mientras que una función asíncrona se ejecuta a destiempo, en un orden que puede ser distinto al que escribimos las instrucciones.</p>
            </div>
            <div className={style.card}>
                <h2>Desarrolle un for que vaya de 1 a 10 de manera síncrona y otro de manera asíncrona, muestra los resultados, ¿estos salen en orden? ¿Por qué?</h2>
                <span>Síncrono</span>
                <p>
                    {forSync()}
                </p>
                <span>Asíncrono</span>
                <p>
                    {resForAsync}
                </p>
                <p>Ambos ciclos aparecen en orden, sin embargo la función asincrona tarda más en aparecer, por lo que renderiza de nuevo parte del componente.</p>
            </div>
            <div className={style.card}>
                <h2>Qué métodos de seguridad se pueden utilizar en los consumos de servicios rest.</h2>
                <p>
                    <li>Validar las cabeceras de las url, ya que se pueden modificar los metodos e insertar algun dato.</li>
                    <li>Evitar mensajes de error demasiado explicitos.</li>
                    <li>codificar los datos para evitar la ejecucion de codigo que se pueda introducir por el cliente.</li>
                </p>
            </div>
        </div>
    );
}

export default Questions;