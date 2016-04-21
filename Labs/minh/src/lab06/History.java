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
    private ArrayList<HistoryObserver> observers = new ArrayList<HistoryObserver>();
    private static History instance = new History();
    
    private History(){}     
    
    public synchronized void addEntry(HistoryEntry e){
        history.add(e);
        
        for(HistoryObserver o:observers){
            o.showNewEntry(e);
        }
    }
    
    public static History getInstance(){
        return instance;
    }
    
    public void register(HistoryObserver o){
        observers.add(o);
    }
    
    public void deregister(HistoryObserver o){
        observers.remove(observers.indexOf(o));
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
