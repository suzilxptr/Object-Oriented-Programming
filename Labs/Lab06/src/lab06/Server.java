/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab06;

import java.io.IOException;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

/**
 *
 * @author minhcao
 */
public class Server {

    private static ServerSocket socketServer;

    public Server() throws IOException {
        socketServer = new ServerSocket(0, 5);
    }

    /**
     * @param args the command line arguments
     * @throws java.io.IOException
     */
    public static void main(String[] args) throws IOException {
        Server server = new Server();
        while (true) {
            System.out.println("Waiting for client on port "
                    + server.socketServer.getLocalPort() + "...");
            Socket socket = server.socketServer.accept();
            System.out.println("Just connected to " + socket.getRemoteSocketAddress());
            String name = socket.getRemoteSocketAddress()+"";
            History history = History.getInstance();
            Interpreter inter = new Interpreter(socket.getInputStream(), new PrintStream(socket.getOutputStream()), name, history);
            inter.run();
        }
    }

}
