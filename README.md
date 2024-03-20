# Rimac Frontend Challenge

Recursos:

- Figma: https://www.figma.com/file/KGftIKxhcVm41kTKMsfTh2/Frontend-Challenge-2023
- APIs:
  - user: https://rimac-front-end-challenge.netlify.app/api/user.json
  - plans: https://rimac-front-end-challenge.netlify.app/api/plans.json

# Sustentación del proyecto:

Se utilizó React (con Vite), TypeScript y Sass (scss) con BEM metodología BEM.

Se construyeron 2 servicios para obtener los datos de usuario y planes, los cuales se consumen en los componentes correspondientes.

Se consideraron las grillas en una utilidad llamada `.grid-page`, ubicada en `src/assets/scss/utils.scss`.

Observaciones:

- Store: Se utilizó el React Context API para manejar el estado global de la aplicación.
  - Para las prubeas solo se consideró persistencia en los datos del usuario.
- Tokens: Al no estar especificados, se complicó el uso tokens. No se pudo crear un token para todas las propiedades en el diseño. El caso ideal es mantener una lista de tokens entre desarrollo y diseño.
- Units: Es recomendado trabajar con REM o EM, sin embargo, se dejó en PX ya que así se encontró por defecto en el diseño.
- Fonts: No pude encontar las fuente del diseño, pero se usó una similar con 3 niveles de fuentes: normal (400), semibold (600) y bold (700).
