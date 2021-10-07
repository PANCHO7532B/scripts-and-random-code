#include <stdio.h>
#include <stdlib.h>

int helloFunction(char name[15]) {
    printf("Hello %s :D\r\n", name);
    return 0;
}
int main() {
    char xd[15];
    printf("Write your name: ");
    scanf("%s", xd);
    helloFunction(xd);
    printf("Function terminated\r\n");
    return 0;
}