package com.springcore.ref;

public class A {
    private  String name;
    private  int age;
    private B address;

    public A(String name, int age, B address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public A() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public B getAddress() {
        return address;
    }

    public void setAddress(B address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "A{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", address=" + address +
                '}';
    }
}
