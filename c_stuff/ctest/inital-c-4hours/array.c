#include <stdio.h>
#include <stdlib.h>

void voidFunction() {
    printf("xd\r\n");
}
int main() {
    int a[] = {5, 10, 20, 30, 40, 50};
    int b[3];
    b[0] = 753;
    b[1] = 251;
    b[2] = 973;
    printf("%d\r\n", a[3]);
    printf("%d %d %d\r\n", b[0], b[1], b[2]);
    voidFunction();
    return 0;
}