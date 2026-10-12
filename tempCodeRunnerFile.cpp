#include <iostream>
#include <string>
using namespace std;

class Teacher{
public:
Teacher(string n , string d, string s, double sal){
name = n;
dept = d;
subject = s;
salary = sal;
}
string name;
string dept;
string subject;
string salary;
void getInfo(){
    cout << "name:" << name << endl;
    cout << "dept:" << dept << endl;
    cout << "subject:" << subject << endl;
    cout << "salary:" << salary << endl;

}
};
int main (){
    Teacher t1("ram" , "computer science" , "C++" , 256);
    t1.getInfo();
return 0;
}