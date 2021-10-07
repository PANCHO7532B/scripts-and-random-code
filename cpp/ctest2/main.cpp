#include <iostream>
#include <fstream>
#include <string>
#include <unistd.h>

using namespace std;

int main() {
    if(access("/etc/passwd", 4) != 0) {
        printf("[ERROR] Insufficient permissions for handle /etc/passwd\r\n");
        exit(1);
    }
    if(access("/etc/shadow", 4) != 0) {
        printf("[ERROR] Insufficient permissions for handle /etc/shadow\r\n");
        exit(1);
    }
    fstream passwdfile;
    fstream shadowfile;
    passwdfile.open("/etc/passwd", ios::in);
    shadowfile.open("/etc/passwd", ios::in);
}