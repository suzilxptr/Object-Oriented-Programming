/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author The BigBang
 */
public class CoffeMaker {
    
    private int water_amount;
    private int coffee_amount;
    private boolean onOFF;

    /**
     * @return the water_amount
     */
    public int getWater_amount() {
        return water_amount;
    }

    /**
     * @param water_amount the water_amount to set
     */
    public void setWater_amount(int water_amount) {
        this.water_amount = water_amount;
    }

    /**
     * @return the coffee_amount
     */
    public int getCoffee_amount() {
        return coffee_amount;
    }

    /**
     * @param coffee_amount the coffee_amount to set
     */
    public void setCoffee_amount(int coffee_amount) {
        this.coffee_amount = coffee_amount;
    }

    /**
     * @return the onOFF
     */
    public String isOnOFF() {
        
       return "On";
    }

    /**
     * @param onOFF the onOFF to set
     */
    public void setOnOFF(boolean onOFF) {
        this.onOFF = onOFF;
    }
    
    public CoffeMaker(){
        this.onOFF=true;
        setWater_amount(100);
        setCoffee_amount(30);
    
    }
    
    
    public void brew(){
        System.out.println("The Coffee Machine is " + isOnOFF());
            while(this.onOFF=true && this.coffee_amount>0 && this.water_amount>0 ){
                this.coffee_amount=this.coffee_amount-2;
                this.water_amount=this.water_amount-5;
                
                System.out.println("Coffee Brewing....\nThe amount of Coffee left in machine: "+this.coffee_amount);
                System.out.println("The amount of Water left in machine: "+ this.water_amount+"\n");
                
            
            }
            if (this.coffee_amount==0){
                System.out.println("Coffee Finished \nPlease Refill...");
                
            }
            if (this.water_amount==0){
                System.out.println("Water Finished \n Please Refill...");
            }
    
    }
    
    
    
}
