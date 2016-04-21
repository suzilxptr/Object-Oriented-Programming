/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab06;

import java.util.ArrayList;

/**
 *
 * @author minhcao
 */
public class History {
    private ArrayList<HistoryEntry> history = new ArrayList<HistoryEntry>();
    private static History instance = new History();
    
    private History(){}     
    
    public void addEntry(HistoryEntry e){
        history.add(e);
    }
    
    public static History getInstance(){
        return instance;
    }

    @Override
    public String toString() {
        String result = "";
        for(HistoryEntry x: history){
            result += x.toString()+"\n";
        }
        return result;
    }
}
