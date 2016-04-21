<%-- 
    Document   : index
    Created on : Jan 22, 2016, 1:21:00 PM
    Author     : Minh Cao,Huy Phan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Coffee Maker</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="row">

                <h2>How can I serve you, Sir?</h2>

                <div class="col-sm-6">
                    
                        <h3>Please turn on the coffee maker if it is not</h3>
                        
                        <button class="button btn btn-primary" value="turnOn">Turn on the machine</button>
                        <button class="button btn btn-warning" value="turnOff">Turn off the machine</button>
                        
                </div>
                <div class="col-sm-6">
                    
                        <h3>Fill Ingredients</h3>
                        
                        <button class="button btn btn-primary" value="fillBean">Fill Beans</button>
                        <button class="button btn btn-primary" value="fillWater">Fill Water</button>
                        <button class="button btn btn-primary" value="fillMilk">Fill Milk</button>
                </div>
            </div>
            <div class="row">

                <div class ="col-sm-6">
                    

                    <div id="coffeeForm">
                    <h3>Choose your coffee </h3>
                        Coffee Type<select name="coffeeType">
                            <option value="Coffee" selected>Normal Coffee</option>
                            <option value="Espresso">Espresso</option>
                            <option value="Cappuccino">Cappuccino</option>

                        </select><br>
                        Cup Size
                        <select name="cupSize">
                            <option value="1" selected>Small</option>
                            <option value="2">Medium</option>
                            <option value="3">Big</option>
                        </select>
                        <br>
                       
                        <button type="submit" class="btn btn-primary" onclick="makeCoffee()">Make Coffee</button>
                    </div>

                </div>
                <div class="col-sm-6">
                    <img src='images/Machine.png'>
                </div>
            </div>
        </div>

    </body>
</html>
