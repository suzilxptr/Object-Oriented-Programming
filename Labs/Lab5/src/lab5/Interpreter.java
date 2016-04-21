/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab5;

import java.io.InputStream;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Date;
import java.util.Scanner;

/**
 *
 * @author The BigBang
 */
public class Interpreter implements Runnable, HistroyObserver {

    private InputStream in;
    private PrintStream out;
    private String name;
    private History history;
    private Scanner s;

    public Interpreter(InputStream in, PrintStream out, String name, History history) {

        this.in = in;
        this.out = out;
        this.name = name;
        this.history = history;
        this.s = new Scanner(in);

    }

    public void run() {
        s = new Scanner(in);

        this.history.register(this);
        while (true) {
            if (this.s.hasNextLine()) {
                String entry = this.s.nextLine();

                if (entry.equals(":quit")) {
                    this.history.deregister(this);
                    return;
                }
                if (entry.equals(":print")) {
                    out.println(this.history.toString());
                    break;
                }
                this.history.addEntry(new HistoryEntry(entry, new Date(), name));

            }
        }
    }

    @Override
    public void showNewEntry(HistoryEntry e) {
        out.println(e.toString());
    }

}
