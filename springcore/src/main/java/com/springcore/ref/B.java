package com.springcore.ref;

public class B {
    private String area;
    private int pincode;

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public B(String area, int pincode) {
        this.area = area;
        this.pincode = pincode;
    }

    public B() {
    }

    @Override
    public String toString() {
        return "B{" +
                "area='" + area + '\'' +
                ", pincode=" + pincode +
                '}';
    }
}
