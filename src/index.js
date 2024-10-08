import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.js';
import Login from './pagínas/login.js'
import Criar_conta from './pagínas/criar_conta.js';
import Recuperar_senha from './pagínas/recuperar_senha.js';
import Portal_artista from './pagínas/Portal artista.js';
import Projetos from './pagínas/Projetos.js';
import Inscricoes from './pagínas/Inscricoes.js';
import Editais from './pagínas/editais.js';
import Inscrições_do_projeto from './pagínas/inscrições_do_projeto.js';
import Cadrasto_de_proj from './pagínas/cadrasto_de_proj.js';
import Feedback from './pagínas/feedback.js';
import Notificacao from "./pagínas/notificacao.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals.js';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/criar_conta",
    element: <Criar_conta/>
  },
  {
    path: "/recuperar_senha",
    element: <Recuperar_senha/>
  },
  {
    path: "/portal_artistas",
    element: <Portal_artista/>
  },
  {
    path: "/inscricoes",
    element: <Inscricoes/>
  },
  {
    path: "/editais",
    element: <Editais/>
  },
  {
    path: "/cadastro-edital",
    element: <Inscrições_do_projeto/>
  },
  {
    path: "/cadastro",
    element: <Cadrasto_de_proj/>
  },
  {
    path: "/feedback",
    element: <Feedback/>
  },
  {
    path: "/projetos",
    element: <Projetos/>
  },
  {
    path: "/notificacao",
    element: <Notificacao/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
