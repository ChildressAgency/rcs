<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>RCS Login</title>
    <!-- Fonts -->
    <link href='css/opensans.css' rel='stylesheet' type='text/css'>
    <link href='css/opensanscondensed.css' rel='stylesheet' type='text/css'>
    <!-- Main Styling -->
    <link href="css/login-style.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="main.js.php"></script>
        <script>
            function doLogin() {
                async("/dash/login.php?async=login&user=" + f("frmLogin", "edtUser"), "pass=" + f("frmLogin", "edtPass"));
            }
        </script>
  </head>
  <body>
    <!--CONTENT GOES HERE-->
    <table style="height: 100%; width: 100%;">
        <tr style="height: 100%;">
            <td style="height: 100%; text-align: center; valign: middle;">
                <div id="frmLogin">
                <table class="normal" align="center">
                    <thead><tr><th colspan="2"><img src="images/RCS-splash-logomark.png"><br>
                      <b>RESEARCH CONTROL SOLUTIONS</b></th></tr></thead>
                    <tbody>
                        <tr><td>Username:</td><td><input type="text" id="edtUser"></td></tr>
                        <tr><td>Password:</td><td><input type="password" id="edtPass"></td></tr>
                        <tr><td style="text-align: center;" colspan="2">
                                <button type="button" class="btn btn-default" data-dismiss="modal" onclick="doLogin();">Login</button>
                        </td></tr>
                    </tbody>
                </table>
                </div>
            </td>
        </tr>
    </table>
    <!--CONTENT END-->
  </body>
</html>
