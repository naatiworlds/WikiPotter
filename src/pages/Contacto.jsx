/**
 * @file Contacto.js
 * @description Este componente representa la página de contacto de la aplicación. Su función principal es mostrar
 * un formulario de contacto, que permite a los usuarios enviar sus consultas o mensajes. El componente utiliza
 * el componente `ContactoForm` para representar el formulario de contacto.
 * 
 * @dependencies
 * - `../components/ContactoForm`: El componente que maneja el formulario de contacto donde los usuarios pueden
 *   introducir su información y mensaje.
 * - `../css/index.css`: Archivo de estilos que aplica el diseño al componente.
 * 
 * @returns {JSX.Element} Un componente que muestra la interfaz de contacto con un formulario.
 * 
 * @version 1.0
 * @date 2024
 */

import ContactoForm from "../components/ContactoForm";  // Importa el componente ContactoForm

const Contacto = () => {
  return (
    <div className="welcome"> {/* Contenedor principal para el formulario */}
        <ContactoForm /> {/* Componente del formulario de contacto */}
    </div>
  );
};

export default Contacto;
