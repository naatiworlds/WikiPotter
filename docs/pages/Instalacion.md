# Instalación y ejecución del programa

Como requisitos previos deberás clonar el repositorio 

```bash
git clone https://github.com/naatiworlds/WikiPotter
```

Una vez clonado deberemos realizar la instalación de todas las dependencias con la ayuda de npm, si no tienes npm deberás descargarlo de su [sitio oficial](https://www.npmjs.com/package/download) además de instalar [node](https://nodejs.org/en/download/package-manager) ambos son necesario para la ejecución e instalación del programa.

```bash
npm install
```

A continuación procedemos a declarar las variables de entorno necesarias para la implementación de `FireBase` deberemos crear una carpeta `.env.local` en la raiz del proyecto, más información de FireBase en su [sitio oficial](https://firebase.google.com/)

por último ya solo nos queda arrancar el servidor de node que nos permitirá visualizar la página web 

**Importante deberá ejecutarse en la carpeta raiz del programa**

```bash
npm run dev
```