
# Ventajas y Desventajas de usar archivos module.css vs CSS normal en React

## Ventajas de module.css
1. **Aislamiento de estilos**: Los estilos definidos en un archivo `module.css` son locales al componente, lo que evita conflictos de nombres y problemas de cascada.
2. **Mantenimiento**: Facilita el mantenimiento del código ya que los estilos están estrechamente relacionados con el componente.
3. **Optimización**: Permite una mejor optimización y carga de estilos, ya que solo se cargan los estilos necesarios para cada componente.

## Desventajas de module.css
1. **Complejidad**: Puede agregar complejidad adicional al proyecto, especialmente en proyectos grandes con muchos componentes.
2. **Configuración**: Requiere configuración adicional en el entorno de desarrollo para soportar CSS Modules.
3. **Reutilización**: La reutilización de estilos entre componentes puede ser más complicada, ya que los estilos están encapsulados.

## Ventajas de CSS normal
1. **Simplicidad**: Es más sencillo de implementar y no requiere configuración adicional.
2. **Reutilización**: Facilita la reutilización de estilos entre diferentes componentes y páginas.
3. **Compatibilidad**: Es compatible con cualquier entorno y no depende de configuraciones específicas.

## Desventajas de CSS normal
1. **Conflictos de nombres**: Es más propenso a conflictos de nombres y problemas de cascada.
2. **Mantenimiento**: Puede ser más difícil de mantener en proyectos grandes, ya que los estilos no están encapsulados.
3. **Optimización**: Puede resultar en una carga innecesaria de estilos, ya que todos los estilos se cargan independientemente de los componentes que se utilicen.

