import "./App.css";
import Sectionsix from './Sectionsix.jsx'
import Sectionfive from './Sectionfive.jsx'
import Sectionfour from './Sectionfour.jsx'
import Sectionthree from './Sectionthree.jsx'
import Sectiontwo from './Sectiontwo.jsx'
import OneSection from './OneSection.jsx'
import Header from './Header.jsx'

function App() {

	return (
		<>
			<OneSection />
			<Header texto="Sumérgete en una narrativa sobre la depresion postparto en nuestro" texto2="CÓMIC DIGITAL INTERACTIVO" boton="Ver cómic" />
			<Sectiontwo texto="CONÓCENOS"
				texto2="Tueris es un proyecto centrado en la realización de un cómic digital interactivo enfocado a una discapacidad mental llamada depresión postparto."
				texto3="En este proyecto abordaremos la depresión postparto desde el punto de vista de una
				superheroina que ayuda a mujeres con depresión postparto, donde sé abordarán los síntomas, las causas, las consecuencias y
				posibles ayudas que puede brindar una persona cercana a la mujer en este
				proceso, todo esto a través de un cómic digital interactivo que busca
				concientizar a las personas que la depresión postparto es un problema serio que debe ser
				tratado a tiempo."/>
			<Sectionthree titulo="Depresión Postparto" text1="Es una discapacidad mental donde
                                las mujeres experimentan sentimientos de tristeza, desánimo o
                                vacío en los días siguientes al parto, interfiriendo en la vida diaria tanto por
                                sus síntomas en la madre como por las consecuencias sobre las funciones
                                maternas de alimentación, crianza y vinculación afectiva con el recién nacido." titulo2="Objetivo" text2=" Visibilizar y representar
                                mediante un comic digital interactivo una
                                historia
                                auténtica donde se muestra los desafíos emocionales que enfrenta una
                                madre que lucha contra la depresión postparto y como encuentra ayuda y
                                apoyo para superarla, con el fin de aumentar la conciencia y la comprensión sobre esta
                                discapacidad mental."/>
			<Sectionfour luisa="Luisa/Tueris" silenciador="El silenciador" madre="Carmen" principal="Personaje principal" secundario="Personaje secundario"/>
			<Sectionfive creadora="CREADORA" nombre="Dalia Bedoya" redes1="Daliabedoyaz@gmail.com" redes2="@Daliart_uwu" text1="Me considero una persona creativa, amigable y responsable, amante del arte y siempre con
                            disposición para la realización de mis trabajos y deberes." text2="Los sueños comienzan cuando se cree en ellos"/>
			<Sectionsix redes1="Daliabedoyaz@gmail.com" redes2="@Daliart_uwu" creditos="Tueris©2023 Todos los derechos reservados."/>
		</>
	);
}

export default App;