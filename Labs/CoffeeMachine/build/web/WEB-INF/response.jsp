<%-- 
    Document   : response
    Created on : Jan 13, 2016, 9:42:27 PM
    Author     : The BigBang
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <jsp:useBean id="mybean" scope="session" class="coffee.machine.Cortado" />
        <jsp:setProperty name="mybean" property="Coffee_name"  />
        <h1>Hello,<jsp:getProperty name="mybean" property="Coffee_name" /> !</h1>
    </body>
</html>
