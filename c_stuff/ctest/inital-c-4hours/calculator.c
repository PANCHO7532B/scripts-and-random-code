#include <stdio.h>
#include <stdlib.h>

int main() {
    int num1;
    int num2;
    printf("Insert first number: ");
    scanf("%d", &num1);
    printf("Insert second number: ");
    scanf("%d", &num2);
    printf("Result: %d\r\n", num1 + num2);
    return 0;
}