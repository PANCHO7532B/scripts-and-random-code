#include <stdio.h>

int somefunction(char **content) {
    printf("content: %s\n", content[1]);
    return 0;
}
int main(int argc, char *argv[]) {
    /*printf("xd\n");
    printf("first argument: %s\n", argv[0]);
    printf("second argument: %s\n", argv[1]);
    printf("third argument: %s\n", argv[2]);
    printf("fourth argument: %s\n", argv[3]);
    char *test = "hello";
    char test2[] = "hello number 2";
    printf("a: %s\n", test);
    printf("b: %s\n", test2);*/
    char *thing[] = {
        "rofl", 
        "rofl2",
        "rofl3"
    };
    somefunction(thing);
    return 0;
}