/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fi.metropolia.huyminh.lab4;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Minh Cao,Huy Phan
 */
@WebServlet(name = "CoffeeServlet", urlPatterns = {"/CoffeeServlet"})
public class CoffeeServlet extends HttpServlet {
    
    private CoffeeMaker maker = new CoffeeMaker();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Map<String, String> res = new HashMap<>();

        res.put("state", maker.getState().name());
        res.put("water", Integer.toString(maker.getWater()));
        res.put("bean", Integer.toString(maker.getBean()));
        res.put("milk", Integer.toString(maker.getMilk()));

        StringBuilder sb = new StringBuilder();
        res.keySet().stream().forEach((key) -> {
            sb.append("<" + key + ">" + res.get(key) + "</" + key + ">");
        });
        response.setContentType("text/xml");
        response.setHeader("Cache-Control", "no-cache");

        response.getWriter().write("<response>" + sb.toString() + "</response>");

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Map<String, String> res = new HashMap<>();
        String action = request.getParameter("action");
        State state = maker.getState();

        if (action.equals("turnOn") && state != State.RUNNING) {
            maker.setState(State.ON);

        }
        if (action.equals("turnOff") && state != State.RUNNING) {
            maker.setState(State.OFF);
        }
        if (action.equals("fillBean")) {
            maker.fillBean(100);
        }
        if (action.equals("fillWater")) {       
            maker.fillWater(100);

        }
        if (action.equals("fillMilk")) {
            maker.fillMilk(100);

        }
        if (action.equals("makeCoffee")) {
            Coffee c;
            try {
                maker.setCupSize(Integer.parseInt(request.getParameter("cupSize")));
                String type = request.getParameter("type");
                c = maker.makeCoffee(type);

                res.put("coffee", c.toString());
                res.put("image", "images/" + type + ".jpg");
            } catch (Exception ex) {

                res.put("error", ex.getMessage());
            }
        }
        res.put("state", maker.getState().name());
        res.put("water", Integer.toString(maker.getWater()));
        res.put("bean", Integer.toString(maker.getBean()));
        res.put("milk", Integer.toString(maker.getMilk()));

        StringBuilder sb = new StringBuilder();
        res.keySet().stream().forEach((key) -> {
            sb.append("<" + key + ">" + res.get(key) + "</" + key + ">");
        });
        response.setContentType("text/xml");
        response.setHeader("Cache-Control", "no-cache");

        response.getWriter().write("<response>" + sb.toString() + "</response>");

    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
