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
public class Coffee {
    
   private String Coffee;
   private int coffee_amountc;
   private int water_amountc;
   
   public  Coffee(){
        
   }
   
  
   
   /**
     * @return the coffee_amount
     */
    public int getCoffee_amountc() {
        return coffee_amountc;
    }

    /**
     * @param coffee_amount the coffee_amount to set
     */
    public void setCoffee_amount(int coffee_amount) {
        this.coffee_amountc = coffee_amount;
          System.out.println("The amount of Coffee: "+ this.coffee_amountc+" gm");
    }

   
    /**
     * @return the water_amount
     */
    public int getWater_amountc() {
        return water_amountc;
    }

    /**
     * @param water_amount the water_amount to set
     */
    public void setWater_amount(int water_amount) {
        this.water_amountc = water_amount;
        System.out.println("The amount of water: "+ this.water_amountc+" ml");
    }

   
    public String getCoffee() {
        return Coffee;
    }

    /**
     * @param Coffee the Coffee to set
     */
    public void setCoffee(String Coffee) {

        this.Coffee = Coffee;
    }
         
   
    
   
    public void coffeeType(){
     
}

    
    
   
}