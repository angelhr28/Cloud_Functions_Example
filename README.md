# Cloud_Functions_Example
Vamos a ejecutar los siguientes comandos para instalar y preparar las herramientas de nuestro proyecto en Firebase:

1.-Instalación: npm install -g firebase-tools

2.-Login: firebase login

3.-Iniciar el proyecto e instalar las dependencias necesarias: firebase init functions

4.-Desplegar todas las funciones firebase deploy --only functions

5.-Desplegar solo una función: firebase deploy --only functions:helloword

6.-Borrar una función: firebase functions:delete NombreDeLaFunción

7.-Visualizar el log (el texto imprimido en la consola) de todas las funciones desplegadas: firebase functions:log