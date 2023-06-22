# prueba_tecnica

# Instrucciones de instalación de prueba_tecnica

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

## Solución de problemas

Si encuentras algún problema durante la instalación o ejecución del proyecto, aquí hay algunas soluciones comunes:

- **Error de dependencias faltantes**: Asegúrate de haber ejecutado `npm install` en el directorio del proyecto para instalar todas las dependencias necesarias.
- **Error de CocoaPods**: Si estás trabajando en un entorno macOS y encuentras problemas relacionados con CocoaPods al compilar el proyecto en iOS, asegúrate de tener CocoaPods instalado y de haber ejecutado `pod install` en el directorio `ios` del proyecto.
- **Error de configuración de Android**: Si estás trabajando en un entorno de desarrollo de Android y encuentras problemas al compilar el proyecto en un dispositivo Android, asegúrate de tener instalado el JDK y Android Studio, y de haber configurado correctamente tu dispositivo móvil para el desarrollo.

Si sigues experimentando problemas, puedes consultar la documentación oficial de React Native (https://reactnative.dev/docs/environment-setup) .

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Si tienes alguna pregunta o necesitas ayuda con la instalación o ejecución del proyecto, contactame través de mi [correo electrónico](mailto:jcfvirgilio@gmail.com)
