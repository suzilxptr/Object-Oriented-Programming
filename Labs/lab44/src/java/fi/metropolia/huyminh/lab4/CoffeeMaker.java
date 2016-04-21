/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fi.metropolia.huyminh.lab4;

/**
 *
 *  @author Minh Cao,Huy Phan
 */
public class CoffeeMaker {

    private int bean;
    private int water;
    private int milk;
    private State state;
    private int cupSize;

    public CoffeeMaker() {
        this.bean=0;
        this.milk=0;
        this.water=0;
        this.cupSize=0;
        this.state=State.OFF;
    }

    public Coffee makeCoffee(String type) throws Exception{
        if(this.state==State.OFF){
            throw new Exception("Machine is off !");
        }
        if(this.state==State.RUNNING){
            throw new Exception("Someone already using .Machine is still running !");
        }
        if(this.cupSize==0){
            throw new Exception("No cup size chosen !");
        }
        if(this.bean>=(3*this.cupSize)&&this.water>=(5*this.cupSize)){
            this.water-=5*this.cupSize;
            this.bean-=3*this.cupSize;
            this.state=State.RUNNING;
            long time=(long) (2000*(this.cupSize+1)/2);
            Thread.sleep(time);
            this.state=State.ON;
            switch(type){
                case "Coffee":
                case "Espresso":
                    return new Coffee(type);
                case "Cappuccino":
                    if(this.milk<(3*this.cupSize))  
                        throw new Exception("Not enough milk to make cappuccino");
                    
                    this.milk-=3*this.cupSize;
                    return new Coffee("Cappuccino");
                    
            }
        }
        
        throw new Exception("Not enough ingredients");
        
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }


    public int getBean() {
        return bean;
    }

    public void fillBean(int bean) {
        this.bean = bean;
    }

    public int getWater() {
        return water;
    }

    public void fillWater(int water) {
        this.water = water;
    }

    public int getMilk() {
        return milk;
    }

    public void fillMilk(int milk) {
        this.milk = milk;
    }

  
    public int getCupSize() {
        return cupSize;
    }

    public void setCupSize(int cupSize) {
        this.cupSize = cupSize;
    }
    
}
