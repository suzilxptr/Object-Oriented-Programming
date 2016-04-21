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
public class Cappuccino extends Coffee {
    
    private String Coffee_name="Cappuccino";
    
    public Cappuccino(){
        
    }
    
   
   @Override
   public void coffeeType(){
        System.out.println("You have selected: "+getCoffee_name());
        setCoffee_amount(12);
        setWater_amount(23);
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
