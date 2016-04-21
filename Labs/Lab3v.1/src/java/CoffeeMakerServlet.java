/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author The BigBang
 */
@WebServlet(urlPatterns = {"/CoffeeMakerServlet"})
public class CoffeeMakerServlet extends HttpServlet {

    private CoffeMaker co = new CoffeMaker();
    private int water_amount = co.getCoffee_amount();
    private int coffe_amount = co.getWater_amount();
    private String onOff = co.isOnOFF();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            if (onOff.equals("On")) {
                out.println("The Coffee Machine is On...<br>");
            }

            if (coffe_amount <= 0) {
                out.println("<strong>Coffee Finished \nPlease Refill...<strong><br>");

            }
            if (water_amount <= 0) {
                out.println("<strong>Water Finished \n Please Refill...<strong><br>");
            }
            if (water_amount >= 0 && coffe_amount >= 0) {
                out.println("The amount of water left in the machine is " + water_amount + " ml<br>");
                water_amount = water_amount - 5;
                out.println("The amount of coffee left in the machine is " + coffe_amount + " gm<br>");
                coffe_amount = coffe_amount - 5;
            }
            out.println("Go back to home page: <a href=\"index.html\">Homepage</a>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        response.setContentType("text/html;charset=UTF-8");

    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
