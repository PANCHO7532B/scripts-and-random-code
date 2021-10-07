#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct st1 {
    int property1;
    int property2;
    char internalName[30];
};

int main() {
    struct st1 genericstruct;
    genericstruct.property1 = 100;
    genericstruct.property2 = 200;
    strcpy(genericstruct.internalName, "ValueName123xD");
    printf("Property 1: %d\n", genericstruct.property1);
    printf("Property 2: %d\n", genericstruct.property2);
    printf("Internal Name: %s\n", genericstruct.internalName);
    return 0;
}