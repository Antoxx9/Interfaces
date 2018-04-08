import React from 'react';
import './styles.scss';

class About extends React.Component {
  render() {
    return (
      <section className="about">
        <div className="aboutContent">
          <div className="aboutText">
            <h1>SOBRE NOSOTROS</h1>
            <p>Somos un pequeño grupo de personas que se preocupan por el desarrollo
              y bienestra de los niños con autismo.
            </p>
            <h2>Nuestra Misión</h2>
            <p>Queremos prover de recursos web que permitan que estos niños puedan
              desarrollar habilidades y capacidades que les permitan ser aún más
              funcionales en el mundo en el que se desenvuelvan
            </p>
            <h2>Ofrecemos</h2>
            <p>Por los momentos solo contamos con juegos que fomentan el desarrollo
              de las habilidades en las que suelen tener alguna deficiencia u oportunidad
              de mejora los niños que sufren de autismo
            </p>
            <b>Estos son:</b>
            <ul>
              <li>Aprendiendo Emociones: Este juego permite a los niños mejorar su habilidad
                para identificar y asociar, con las distintass emociones, las variadas expresiones
                faciales.
              </li>
              <li>Tablero Mágico: A medida que se avanzando en este juego de mesa, el niño
                recibe consejos y lecciones de como lidiar con distintas situaciones en las que, dada
                su situación, se pudiera sentir identificado
              </li>
              <li>Maneja Tus Reflejos: Este juego pone en practica la coordinación 
                visomotriz del jugador manejando una nave espacial i combatiendo enemigos en el espacio
              </li>
              <li>Sé Creativo: Practica la creatividad y proyección espacial con esta herramienta
                de dibujo.
              </li>
              <li>Entrenando el Cuerpo: En este juego, se aprovechan de las bondades del dispositivo
                Kinect para que, moviendo el cuerpo, corte las frutas que aprecen en pantalla y acumular
                puntos
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;