#include <iostream>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

int main(int argc, char **argv) {


/* todo:
 * write bypass for cli arguments
 */



    if (argc < 2){

        cout << "\nxBOT" << " utility. \n\n"
             << "using the xBOT utility: \n" << argv[0] << " <COMMAND> \n"
             << "\n"
             << " Commands: \n"
             << " | ------- | ------------------------------------------------------------ | \n"
             << " | COMMAND | DESCRIPTION                                                  | \n"
             << " | ------- | ------------------------------------------------------------ | \n"
             << " | start   | starts the bot.                                              | \n"
             << " | dev     | starts the bot in dev mode.                                  | \n"
             << " | install | installs the bot (you can also use this to update the bot.)  | \n"
             << " | yarn    | installs the bot with yarn (could be used to update the bot) | \n"
             << " | ------- | ------------------------------------------------------------ | \n"
             << "\n";

        return 0;

    }

    if(string(argv[1]) == "start") {

        system("node index.js");
        return 0;

    }

    if(string(argv[1]) == "dev") {

        cout << "Have you installed nodemon? \n";
        cout << "[y/n] : ";

        string x;

        cin >> x;

        if (x == "Y" || x == "y" ) {

            system("npm test");

        }

        if (x == "n" || x == "N") {

            printf("nodemon will be installed globally...");
            system("sudo npm -g install nodemon");

        }

        return 0;

    }

    if (string(argv[1]) == "install") {

        cout << "type 'ok' to install xbot: ";
        string x;
        cin >> x;

        if (x == "ok" || x == "OK" || x == "Ok" || x == "oK") {

            system("git pull");
            system("npm i");

        }

        return 0;

    }

    if (string(argv[1]) == "yarn") {
        printf("installing with yarn"); 
        system("git pull");
        system("yarn install"); 
        return 0;
    }

    if (string(argv[1]) == "dev_y") {
        cout << "POTTAH? HOW DID YOU FIND MY SECRET COMMAND? :O \n"; 
        system("npm test"); 
        return 0;
    }

    if (string(argv[1]) == "compile") {

        printf("compiling...\n");
        system("g++ ./utils/cpp/xbot.cpp -o xbot");
        printf("done.\n");
        return 0;

    }

}
