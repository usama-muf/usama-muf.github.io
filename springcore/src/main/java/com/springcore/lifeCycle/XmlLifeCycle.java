package com.springcore.lifeCycle;

public class XmlLifeCycle {
    private double price;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        System.out.println("SetPrice method called");
        this.price = price;
    }

    public XmlLifeCycle() {
    }

    @Override
    public String toString() {
        return "XmlLifeCycle {" +
                "price=" + price +
                '}';
    }

    public void init(){
        System.out.println("Init method called");
    }
    public void destroy(){
        System.out.println("Destroy method called");
    }
}
