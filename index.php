<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./front/ui/css/style.css">
  <title>final lab</title>
</head>
<body>
  <h1>Samsung Lab</h1>
  <main>
    <section>
      <h2 id="form-title">Formulario de Registro</h2>
      <form method="POST" action="registerUser.php" aria-labelledby="form-title" autocomplete="off">
        <fieldset>
          <p>
            <label for="nombre">Nombre<span aria-hidden="true">*</span></label>
            <input type="text" class="input-field" name="nombre" aria-required="true">
            <span class="error-message"></span>
          </p>
          <p>
            <label for="primer-apellido">Primer Apellido<span aria-hidden="true">*</span></label>
            <input type="text" class="input-field" name="primer-apellido" aria-required="true">
            <span class="error-message"></span>
          </p>
          <p>
            <label for="segundo-apellido">Segundo Apellido<span aria-hidden="true">*</span></label>
            <input type="text" class="input-field" name="segundo-apellido" aria-required="true">
            <span class="error-message"></span>
          </p>
          <p>
            <label for="email">Email<span aria-hidden="true">*</span></label>
            <input type="email" class="input-field" name="email" autocomplete="email" aria-required="true">
            <span class="error-message"></span>
          </p>
          <p>
            <label for="password">Password<span aria-hidden="true">*</span></label>
            <input type="password" class="input-field" name="password" autocomplete="new-password" aria-required="true">
            <span class="error-message"></span>
          </p>
        </fieldset>
        <span id="form-feedback" class="form-feedback"></span>
        <input type="submit" value="Enviar">
        <button id="consulta-btn" style="display: none;">Consulta</button>
      </form>
    </section>
  
    <section id="table-section">
      <h2 id="table-title">Listado de usuarios</h2>
      <table id="user-table"  aria-labelledby="table-title">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id="user-table-body">
        </tbody>
      </table>
    </section>
  </main>
  <script type="module" src="./front/main.js"></script>
</body>
</html>