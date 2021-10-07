#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <unistd.h>

bool showHelp = false;
char helpArg[] = "--help";
int main(int argc, char *argv[]) {
    if(access("/etc/passwd", R_OK) != 0) {
        printf("[ERROR] Insufficient permissions for handle /etc/passwd\r\n");
        exit(1);
    }
    if(access("/etc/shadow", R_OK) != 0) {
        printf("[ERROR] Insufficient permissions for handle /etc/shadow\r\n");
        exit(1);
    }
    FILE *passwd = fopen("/etc/passwd", "rw");
    FILE *shadow = fopen("/etc/shadow", "rw");
    for(int c = 0; c < argc; c++) {
        if(strcmp(argv[c], helpArg) == 0) {
            showHelp = true;
        }
    }
    //idk lol
    if(showHelp) {
        printf("userbackup-c\r\n");
        printf("Copyright (c) P7COMunications LLC - 2021 [CONFIDENTIAL SOFTWARE]\r\n");
        printf("Usage: userbackup [--arg, -a]\r\n\r\n");
        printf("[--help] Show this help\r\n");
    }
}