---
title: TYPESCRIPT INTERMEDIO = React con TypeScript
description: Desarrollo del curso
---

## DESCRIPCIÓN

Alejandro Cerezo Lasne
<alce65@hotmail.es>

DURACIÓN 39 horas / 3 semanas (L-J) / 12 días

## Día 1 (L 12/05)

- Presentación del curso
- Presentación del formador y los alumnos
- Instalación de React + TypeScript con Vite
- Introducción a TypeScript
  - Inferencia y anotación de tipos
  - Tipos literales
  - El tipo any y el tipo unknown
  - Tipado de funciones. Modificación de ESLint
  - Tipos propios: Alias v. Interfaces
- Tipado de datos en React
  - Entidades y DTOs
  - Utilidades de tipos en TypeScript
- Componentes funcionales y tipos
  - Props

## Día 2 (M 13/05)

- Instalación de Vitest y Testing Library
  - Prueba con un test
- Componentes funcionales y tipos (continuación)
  - Props -> Counter
- - PropTypes vs TypeScript
  - State -> Counter
  - Literales y tipos de unión -> Button
  - La prop children -> Button
    - Composición de componentes
    - [S]OLID: Single Responsibility Principle
  - Tipado de eventos del DOM -> CounterEvent
    - Target y currentTarget
    - Firmas de indice (Records)
- Test del componente Counter
  - Test de eventos: click

## Día 3 (X 14/05)

- Formularios
  - Formularios controlados
  - Tipado de eventos Change y Submit
  - Ejemplos. Checkbox
  - Formularios no controlados. FormData
- Tipos unión e intersección
  - Tipos unión: uniones discriminadas
  - Intersección de tipos. Extensión de Interfaces
  - SOL[I]D: Interface Segregation Principle

## Día 4 (J 15/05)

- Review: función getDataForm usando FormData.
  - Uso del iterable.
  - Uso de genericos para abstraer la función
- Módulo 2
- Sobrecarga de funciones
  - Ejemplo: función format
  - Ejemplo: función getDisplayValue en un componente
  - Sobrecarga de métodos
- Tipado de hooks de react
  - useState y useEffect
  - Asincronía en useEffect. useCallback
  - useRef

## Día 5 (L 19/05)

- Review: problemas de Linter
  - Comando linter en package.json
  - Fichero main de React: el operador ! (non-null assertion)
- forwardRef. Novedades en React 19
- Hook personalizados (Custom Hooks)
  - Ejemplo: useToggle. Tupla como retorno
  - Ejemplo: useLocalStorage<T>. Genéricos en los Hooks
- Promese y callbacks. Encapsulando fetch como servicio
  - Tipado de la promesa
  - Gestión unificada de los errores
- Estados y asincronía (promesas): componente User
  - Estados: loading, user y error. Tipado
  - Carga de datos en el componente.
  - Función asíncrona dentro del useEffect

## Día 6 (M 20/05)

- Estados, hooks y asincronía (promesas): hook UseUser
  - Abstracción del código del componente User
  - Tipado del hook
  - Uso del hook en el componente
- Hook useId
  - Generación de IDs únicos
  - Uso del hook en los componentes Form, Focus, Input
- Flux con useReducer
  - Ejemplo: componente Contador
  - Entidad, Acciones y reducer. Tipado
  - Uso del hook useReducer en el componente. Funciones dispatch
- Mejoras de Flux
  - Nombres de las acciones
  - Action creators

## Día 7 (X 21/05)

- Mejoras Flux (continuación)
  - Reducers como diccionarios de funciones. Reducción de complejidad
  - Incorporación de lógica asíncrona
  - Thunks
  - Test de los reducers
- Modulo 3 Clases. Inyección de dependencias
  - Introducción a las clases en TypeScript
  - Clases y herencia
  - Interfaces y clases abstractas
- Componentes basados en clases
  - Props y State. Tipado
  - Jerarquía de componentes
  - Ciclo de vida y Hooks en componentes de clase

## Día 8 (J 22/05)

- Servicios basados en clases
  - Ejemplo: Repositorios. Uso de interfaces
  - Inyección / inversión de dependencias. Repositorios en el custom Hook
- Context API
  - Contexto y Provider
  - Contexto como inyector de dependencias
  - Contexto como estado global
  - Custom Hooks en el contexto
- Test del reducer

## Día 9 (L 26/05)

- Modulo 4. Proyectos
  . Estructura modular de un proyecto
  - Estructura de carpetas (scaffolding) : feature oriented
  - Módulos ESM. Import / Export. Import types
  - Importaciones en Vite
- Tsconfig
  - Alias de importación: tsconfig y Vite
- Namespaces en TypeScript y en ESM
- Modulo 5. Integración de librerías
  - Librerías sin tipos: @types
  - Concepto de d.ts y creación en Vite
- Optimización de proyectos: Monorepos multimódulo
  - Ventajas de los monorepos
  - Monorepos con NPM
- Caso práctico: refactorización del curso como monorepo
  - Incorporación de un proyecto nuevo
  - Organización feature oriented
  - Componentes iniciales del core:
    - App
    - Header
    - Footer
- Testing unitario
  - Test de App: Mock de componentes
  - Test de Header y Footer: testing/Library

## Día 10 (M 27/05)

- Review: Creación de de d.ts en Vite
- Review Alias de importación: tsconfig y Vite
- Caso práctico (continuación)
- Layout y context. DI del título

- React Router
  - Instalación. Estrategias
  - Modo declarativo. Router (Provider)
    - Definición de rutas: componentes Routes y Route
    - Navegación mediante urls en el navegador
    - Organización de las rutas: componente AppRouter
  - Menu: Link y NavLink. Iteración al crearlo
  - Creación de las páginas. Navegación entre ellas
  - Rutas dinámicas. Página de detalle
    - Parámetros de ruta
    - Navegación programática

## Día 11 (X 28/05)

- Configuración de path alias
- Revisión de los tests
- React Router (continuación)
  - Rutas lazy. Suspense
  - Error boundaries. Class componentes
  - Test de rutas lazy
- Modo datos de React Router
  - Clon del proyecto anterior
  - Estrategia de datos. Rutas y router
  - Lazy loading
- Feature products
  - Entidad y DTO. Mock de productos
  - Repositorio de productos
  - Inyección desde main y el contexto
  - Página de productos

## Día 12 (J 29/05)

- Feature products (continuación)
  - Componente ProductDetail
  - Test de los componentes
  - Loaders en las rutas
  - Factory de las rutas con DI
- Redux
  - Introducción a Redux
  - Instalación de Redux Toolkit
  - Store y Provider
  - Nueva feature Cart
    - Reducers y acciones
    - Uso de useSelector y useDispatch
