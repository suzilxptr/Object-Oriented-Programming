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
public class Cortado extends Coffee {
    
    
    private String Coffee_name="Cortado";
    
    
    public Cortado(){
       coffeeType();
    }
    
   
   @Override
   public void coffeeType(){
        System.out.println("You have selected: "+getCoffee_name());
        setCoffee_amount(6);
        setWater_amount(9);
}

    /**
     * @return the Coffee_name
     */
    public String getCoffee_name() {
        return Coffee_name;
    }

    /**
     * @param Coffee_name the Coffee_name to set
     */
    public void setCoffee_name(String Coffee_name) {
        this.Coffee_name = Coffee_name;
    }

    
}

