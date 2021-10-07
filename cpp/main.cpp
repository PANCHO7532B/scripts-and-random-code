#include <cstdlib>
#include <iostream>
#include <string>
#include <limits>
#include <vector>
#include <sstream>
#include <numeric>
#include <ctime>
#include <cmath>

using namespace std;

int main(int argc, char** argv) {
    vector<int> vectorxd(2);
    vectorxd[0] = 1;
    vectorxd[1] = 2;
    vectorxd.push_back(4);
    cout << "val: " << vectorxd[2] << endl;
    return 0;
}