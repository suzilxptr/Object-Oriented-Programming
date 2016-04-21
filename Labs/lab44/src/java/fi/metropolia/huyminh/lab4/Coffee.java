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
public class Coffee{
    private String type;
    

    public Coffee(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
         return "A hot cup of "+this.type+" is served ."; 
    } 
}
