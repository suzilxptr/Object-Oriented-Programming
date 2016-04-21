
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

/**
 *
 * @author The BigBang
 */
public class ChatServer {

    static Socket sock;
    static ServerSocket socket;

    public ChatServer() {

    }

    public static void main(String[] args) {

        ChatServer chat = new ChatServer();
        try {
            socket = new ServerSocket(0, 5);

            while (true) {

                System.out.println("Server Socket started at port: " + socket.getLocalPort());
                sock = chat.socket.accept();
                String name = sock.getRemoteSocketAddress() + "";

                Interpreter i = new Interpreter(sock.getInputStream(), new PrintStream(sock.getOutputStream()), name, History.getInstance());

                Thread t = new Thread(i);//passing interperter as a parameter to a thread and running it.
                t.start();

            }

        } catch (IOException ex) {
            ex.printStackTrace();

        }

    }

}
