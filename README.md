# Divisas

https://github.com/jcfvirgilio/prueba_tecnica/assets/33680097/3ef2e056-bbdf-4403-afc1-d140679ce6b2


# Instrucciones de instalación

Estas son las instrucciones paso a paso para instalar y ejecutar el proyecto `prueba_tecnica` en dispositivos móviles iOS y Android.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js: https://nodejs.org/
- NPM: https://www.npmjs.com/get-npm
- CocoaPods (solo para iOS): https://cocoapods.org/
- JDK (Java Development Kit) y Android Studio (solo para Android): https://developer.android.com/studio

## Pasos de instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu dispositivo móvil:

### Paso 1: Clonar el repositorio

Clona el repositorio `prueba_tecnica` en tu máquina local:

```bash
git clone https://github.com/jcfvirgilio/prueba_tecnica.git
```

### Paso 2: Instalar dependencias

Entra en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
cd prueba_tecnica
npm install
```

### Paso 3: Instalar dependencias de iOS (solo para iOS)

Entra en el directorio ios del proyecto y ejecuta el siguiente comando para instalar las dependencias de iOS utilizando CocoaPods:

```bash
cd ios
pod install
```

### Paso 4: Configurar dispositivo móvil

Conecta tu dispositivo móvil a tu computadora y asegúrate de que esté configurado para el desarrollo. Puedes seguir la documentación oficial de React Native para configurar tu dispositivo:

```bash
Para iOS: https://reactnative.dev/docs/running-on-device#3-plug-in-your-device-via-usb
Para Android: https://reactnative.dev/docs/running-on-device#1-enable-debugging-over-usb
```

### Paso 5: Ejecutar en dispositivos móviles

```bash
iOS

Abre el archivo prueba_tecnica.xcworkspace en Xcode. Luego, selecciona tu dispositivo móvil como destino y presiona el botón de "Play" para ejecutar la aplicación en tu dispositivo iOS.
```

```bash
Android

Ejecuta el siguiente comando en la raíz del proyecto para compilar y ejecutar la aplicación en tu dispositivo Android:
npx react-native run-android
```

Esto compilará y ejecutará la aplicación en tu dispositivo Android conectado.

### Ejecuta desde Visual Studio Code

```bash
Visual Studio Code
Para ejecutar una aplicación, sigue estos pasos:

1. Abre Visual Studio Code en tu computadora.
2. Abre la carpeta del proyecto de React Native en Visual Studio Code.
3. Asegúrate de tener todas las dependencias necesarias instaladas para tu proyecto de React Native. Puedes verificar esto revisando el archivo `package.json` del proyecto y ejecutando `npm install` en la terminal si faltan dependencias.
4. Asegúrate de tener un emulador de Android o iOS configurado y en ejecución, o bien un dispositivo físico conectado a tu computadora.
5. Ejecuta el siguiente comando en la terminal para compilar e iniciar la aplicación de React Native:

      npx react-native run-android   # Para ejecutar en un emulador o dispositivo Android

      npx react-native run-ios  # Para ejecutar en un emulador o dispositivo iOS

Si deseas ejecutar la aplicación en un dispositivo físico Android, asegúrate de haber habilitado la depuración por USB en tu dispositivo y de que esté conectado correctamente a tu computadora.

Si deseas ejecutar la aplicación en un dispositivo físico iOS, asegúrate de tener un perfil de aprovisionamiento válido y configurado en Xcode.

Estos comandos asumen que tienes React Native correctamente instalado en tu sistema.

6. Observa la terminal para ver el progreso de la compilación y la ejecución de la aplicación. Una vez finalizado, la aplicación de React Native se abrirá en el emulador que tengas instalado.

```

### Solución de problemas

Si encuentras algún problema durante la instalación o ejecución del proyecto, aquí hay algunas soluciones comunes:

- **Error de dependencias faltantes**: Asegúrate de haber ejecutado `npm install` en el directorio del proyecto para instalar todas las dependencias necesarias.
- **Error de CocoaPods**: Si estás trabajando en un entorno macOS y encuentras problemas relacionados con CocoaPods al compilar el proyecto en iOS, asegúrate de tener CocoaPods instalado y de haber ejecutado `pod install` en el directorio `ios` del proyecto.
- **Error de configuración de Android**: Si estás trabajando en un entorno de desarrollo de Android y encuentras problemas al compilar el proyecto en un dispositivo Android, asegúrate de tener instalado el JDK y Android Studio, y de haber configurado correctamente tu dispositivo móvil para el desarrollo.
- **Si tienes este error** : 'Could not determine the dependencies of task ':app:compileDebugJavaWithJavac, asegurate de tener instalado el SDK de Android en tu sistema '.

Si sigues experimentando problemas, puedes consultar la documentación oficial de React Native (https://reactnative.dev/docs/environment-setup?platform=android&os=macos) .

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Si tienes alguna pregunta o necesitas ayuda con la instalación o ejecución del proyecto, contactame través de mi [correo electrónico](mailto:jcfvirgilio@gmail.com)

```

```
