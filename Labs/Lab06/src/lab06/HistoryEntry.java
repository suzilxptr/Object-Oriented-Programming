/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab06;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author minhcao
 */
public class HistoryEntry {
    private String sender;
    private String data;
    private String time;
    private SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
    
    public HistoryEntry(String sender, String data, Date date ){
        this.sender = sender;
        this.data = data;
        this.time = sdf.format(date);
    }

    @Override
    public String toString() {
        return sender+ "(" + time +")"+": "+data;
    }
    
}
