/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab5;

import java.util.Date;
import java.util.Scanner;

/**
 *
 * @author The BigBang
 */
public class HistoryEntry  {

    private String name;
    private Date date;
    private String myname;
    private String data;

    public HistoryEntry(String name, Date date, String myname) {
        this.name = name;
        this.date = date;
        this.myname = myname;
        this.data=data;

    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the text
     */
    public String getText() {

        return this.name + " " + this.date + " " + this.myname;
    }
    
    @Override
    public String  toString(){
        return getText();
    
    
    }


}
