/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab5;

import java.util.ArrayList;
import java.util.Iterator;

/**
 *
 * @author The BigBang
 */
public class History {

    private static History historyen = new History();
    private ArrayList<HistroyObserver> observer = new ArrayList<HistroyObserver>();
    private ArrayList<HistoryEntry> newentry = new ArrayList<HistoryEntry>();

    public void addEntry(HistoryEntry e) {
        newentry.add(e);

        for (HistroyObserver o : observer) {
            o.showNewEntry(e);
        }
    }

    public void register(HistroyObserver o) {
        observer.add(o);

    }

    /**
     *
     * @param o
     */
    public void deregister(HistroyObserver o) {
        observer.remove(observer.indexOf(o));

    }

    public static History getInstance() {
        return historyen;

    }

    @Override
    public String toString() {
        StringBuilder s = new StringBuilder();
        for (HistoryEntry e : newentry) {
            s.append(e.getText());
            s.append("\n");
        }
        return s.toString();
    }

}
