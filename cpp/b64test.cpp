#include <iostream>
#include "base64.cpp"

using namespace std;
string inputData;

int main(int argc, char **argv) {
    char buffer;
    while(cin.get(buffer)) {
        if(buffer == '\n') {

        }
        inputData += buffer;
    }
    //cout << inputData;
    //cout << base64_encode(inputData) << endl;
    try {
        cout << base64_decode(inputData) << endl;
    } catch(runtime_error exc) {
        cout << base64_decode(inputData.substr(0, inputData.length()-1)) << endl;
    }
    return 0;
}