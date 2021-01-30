import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-primary: #da5c5c;
  --color-primary-hover: #e17c7c;
  --color-secondary:#9E9E9E;
  --color-secondary-hover:#b1b1b1;
  --color-tertiary:#ff1744;
  --color-tertiary-hover:#ff4569;
  
  --color-border:#c53030;
  --color-border-focus:#ff9000;
  
  --color-button:#312e38;
  
  --color-text:#ffffff;
  --color-text-hover:#f4ede8;
  --color-text-placeholder: #666360;
  --color-text-contrast:#000000;
  --color-text-title:#b2b2b2;
  --color-text-decorator:#ff9000;
  --color-text-description:#ffffff;

  --color-background:#312e38;
  --color-background-tootip:#c53030;
  --color-background-modal:#F0F0F5;
  --color-background-svg:#999591;
  --color-background-card:#5a575f;
  --color-background-header:#28262e;
  --color-background-card-detach:var(---color-tertiary);
  --color-box-shadow:rgba(0, 0, 0, 0.25);

  --size-font-text:16px;
  --size-font-title:24px;
  --size-font-title-extra:36px;
  --size-image-avatar:100px;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: var(--color-background);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}
body, input, button{
  font-family: 'Roboto', sans-serif;
  font-size: var(--size-font-text);

}

h1, h2, h3, h4, h5,h6, strong{
  font-weight: 700;
}
button{
  cursor: pointer;
}`;
