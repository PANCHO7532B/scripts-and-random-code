#include <stdio.h>
#include <stdlib.h>

int main() {
    char name[15];
    printf("Please write your name: ");
    scanf("%s", name);
    printf("Your name is %s. Hi! :D\r\n", name);
    return 0;
}