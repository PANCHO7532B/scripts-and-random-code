#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    FILE * fpoint = fopen("test.txt", "w");
    fprintf(fpoint, "example text");
    fclose(fpoint);
    //validating the text
    int comparison;
    char target[] = "example text";
    char data[255];
    FILE * fpoint2 = fopen("test.txt", "r");
    fgets(data, 255, fpoint2);
    comparison = strcmp(data, target);
    if(comparison == 0) {
        printf("OK\r\n");
    } else {
        printf("fail\r\n");
    }
    return 0;
}