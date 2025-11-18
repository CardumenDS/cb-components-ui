# Cardumen Design System — cb-components-ui

Paquete de componentes React Native para el design system "Cardumen".

## Build

Compila TypeScript y genera los artefactos en `lib/`:

```powershell
npm install
npm run build
```

El comando `npm run pack` ejecuta `npm pack` y genera un archivo tarball `.tgz` listo para publicar en un registry.

## Publicar en JFrog (artifactory)

1. Crear o editar un archivo `.npmrc` en la raíz del proyecto con las credenciales y registry. Ejemplo:

```text
registry=https://your-jfrog-domain/artifactory/api/npm/npm-local/
//your-jfrog-domain/artifactory/api/npm/npm-local/:_authToken=YOUR_API_KEY
```

2. Compilar y empaquetar:

```powershell
npm run build
npm pack
```

3. Publicar directamente (si `npm publish` está permitido):

```powershell
npm publish --registry https://your-jfrog-domain/artifactory/api/npm/npm-local/
```

Alternativamente, subir el `.tgz` generado a JFrog mediante la UI o la API REST.

## Uso

Desde otro proyecto React Native:

```ts
import { Button } from 'cb-components-ui';

<Button title="Hola" onPress={() => {}} />
```

## Notas

- El paquete declara `peerDependencies` en `package.json` para `react` y `react-native`.
- Si utiliza scopes o un registry privado, asegúrese de configurar `.npmrc` en CI con credenciales seguras.

## Troubleshooting: error "main" has not been registered

Si al ejecutar la app en un emulador/real device ves el error:

"main" has not been registered. This can happen if:
- Metro (the local dev server) is run from the wrong folder.
- A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.

Pasos rápidos para resolverlo:

1) Asegúrate de que `package.json` tiene el entry correcto para Metro/Expo:

```json
"main": "index.ts"
```

2) Desde la raíz del proyecto (donde está `app.json`) reinicia Metro y limpia cache:

```powershell
cd C:\Users\Harold\Proyectos\Compartamos\cb-components-ui
npx expo start -c
```

3) Si usas `react-native run-android` o `npx react-native start`, limpia cache manualmente:

```powershell
npx react-native start --reset-cache
```

4) Verifica que `index.ts` o `index.js` ejecuta `registerRootComponent` / `AppRegistry.registerComponent('main', ...)` (en este repo `index.ts` llama a `registerRootComponent`).

5) Revisa la consola Metro para errores de bundling que bloqueen la carga de módulos. Corrige cualquier error de import o tipo que impida ejecutar el módulo principal.

6) Si el problema ocurre sólo en Android emulador, reinicia el emulador y/o ejecuta:

```powershell
npx adb reverse tcp:8081 tcp:8081
```

Si necesitas que lo diagnostique en tu entorno, dime si estás usando Expo Go o una build nativa, y si ejecutas `expo start` o `npx react-native run-android`.
