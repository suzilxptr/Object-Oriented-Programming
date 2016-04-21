/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab06;

import java.io.InputStream;
import java.io.PrintStream;
import java.util.Date;
import java.util.Scanner;

/**
 *
 * @author minhcao
 */
public class Interpreter {
    private InputStream in;
    private PrintStream out;
    private String name;
    private History history;
    private Scanner scanner;
    
    public Interpreter(InputStream in, PrintStream out, String name, History history){
        this.in = in;
        this.out = out;
        this.name = name;
        this.history = history;
        this.scanner = new Scanner(in);
    }
    
    public void run(){
        boolean isEnd = false;
        while(!isEnd){
            if(this.scanner.hasNextLine()){
                String aLine = this.scanner.nextLine();
                switch (aLine) {
                    case ":quit":
                        out.println("Bye bye!");
                        System.out.println("Client "+name+" disconnected!");
                        isEnd = true;
                        break;
                    case ":print":
                        out.println(this.history.toString());
                        break;
                    default:
                        HistoryEntry entry = new HistoryEntry(this.name, aLine, new Date());
                        this.history.addEntry(entry);
                        out.println(entry.toString());
                        break;
                }
            }
        }
    }
}
