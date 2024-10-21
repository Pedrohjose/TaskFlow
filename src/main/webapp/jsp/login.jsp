<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="shortcut icon"
      href="${pageContext.request.contextPath}/img/favicon.ico"
      type="image/x-icon"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" media="all" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <title>Login | TaskFlow</title>
    <meta name="author" content="Enzo dos Santos Scholl" />
    <meta
      name="description"
      content="Empresa fictícia que trabalha com gerenciamento de tarefas"
    />
    <meta name="keywords" content="css, html, java, js, sql, taskflow" />
  </head>
  <body>
    <div class="main-content">
      <!-- Login -->
      <div class="login-section">
        <h1 aria-label="Login">Login</h1>
        <form action="${pageContext.request.contextPath}/login" method="post">
          <div class="form-group">
            <label for="username" aria-label="Usuário"
              >Usuário <span class="required">*</span></label
            >
            <input
              type="text"
              name="username"
              id="username"
              maxlength="100"
              autocomplete="username"
              required
              aria-label="Campo para inserir seu usuário"
            />
          </div>
          <div class="form-group">
            <label for="password" aria-label="Senha"
              >Senha <span class="required">*</span></label
            >
            <div class="input-group">
              <input
                type="password"
                name="password"
                id="password"
                maxlength="100"
                autocomplete="current-password"
                required
                aria-label="Campo para inserir sua senha"
              />
              <span class="show-password" role="button"
                ><img
                  src="${pageContext.request.contextPath}/img/login/eye.svg"
                  alt="Botão para visualizar a senha"
              /></span>
            </div>
          </div>
          <button
            type="submit"
            aria-label="Botão para enviar informações do formulário"
          >
            Login
          </button>
        </form>
        <span aria-label="Seção de redirecionamento para criar uma conta"
          >Não possui uma conta? <a href="${pageContext.request.contextPath}/sign-up.jsp">Sign up!</a></span
        >
      </div>
      <!-- Slides -->
      <div class="slides-section">
        <img
          src="${pageContext.request.contextPath}/img/login/showcase.svg"
          alt="Imagem demonstrativa"
        />
        <h2 aria-label="Organize seu tempo de maneira eficiente">
          Organize seu tempo de maneira eficiente
        </h2>
        <p
          aria-label="A TaskFlow facilita o gerenciamento de tarefas, permitindo que você foque nas atividades mais importantes e atinja suas metas de forma eficaz."
        >
          A TaskFlow facilita o gerenciamento de tarefas, permitindo que você
          foque nas atividades mais importantes e atinja suas metas de forma
          eficaz.
        </p>
        <div class="slides-controls">
          <span
            class="slide-button current"
            aria-label="Botão para passar slide"
            role="button"
            data-slide="1"
          ></span>
          <span
            class="slide-button"
            aria-label="Botão para passar slide"
            role="button"
            data-slide="2"
          ></span>
          <span
            class="slide-button"
            aria-label="Botão para passar slide"
            role="button"
            data-slide="3"
          ></span>
        </div>
      </div>
    </div>
    <script src="${pageContext.request.contextPath}/js/main.js" defer></script>
  </body>
</html>