/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package coffee.machine;

/**
 *
 * @author The BigBang
 */
public class User {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Machine m1=new Machine();
        m1.coffeebrewing();
        Doppio d=new Doppio();
        d.coffeeType();
        //m1.coffeebrewing();
        Cappuccino ca=new Cappuccino();
        ca.coffeeType();
        //m1.coffeebrewing();
        Cortado co=new Cortado();
        co.coffeeType();
        //m1.coffeebrewing();
        // TODO code application logic here
    }
    
}
